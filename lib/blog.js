import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'

const CONTENT_DIR = path.join(process.cwd(), 'content/blog')
const IMAGES_DIR = path.join(process.cwd(), 'public/images/blog')

function getLangDir(lang) {
  const mapped = lang === 'zh-Hans' ? 'zh' : lang
  return path.join(CONTENT_DIR, mapped || 'en')
}

// Returns array of post metadata for listing page
export function getAllPosts(lang = 'en') {
  const dir = getLangDir(lang)
  if (!fs.existsSync(dir)) return []
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') && !f.startsWith('_'))
  const today = new Date().toISOString().split('T')[0]
  const isDev = process.env.NODE_ENV === 'development'
  return files
    .map(filename => {
      const raw = fs.readFileSync(path.join(dir, filename), 'utf-8').replace(/\r\n/g, '\n')
      const { data: meta, content } = matter(raw)
      // Derive meta_description from first non-heading, non-empty paragraph
      const firstPara = content
        .replace(/<!--[\s\S]*?-->/g, '')
        .split('\n')
        .map(l => l.trim())
        .find(l => l && !l.startsWith('#') && !l.startsWith('---') && !l.startsWith('>') && !l.startsWith('|') && !l.startsWith('*Last updated'))
      const derivedDesc = firstPara
        ? firstPara.replace(/\*\*/g, '').slice(0, 155)
        : ''
      const meta_description = meta.meta_description || derivedDesc
      return { ...meta, meta_description }
    })
    .filter(post => {
      if (post.draft === true) return isDev
      return post.publish_date <= today
    })
    .sort((a, b) => new Date(b.publish_date) - new Date(a.publish_date))
}

// Returns full post data for individual post page
export async function getPostBySlug(slug, lang = 'en') {
  const filePath = path.join(getLangDir(lang), `${slug}.md`)
  const raw = fs.readFileSync(filePath, 'utf-8').replace(/\r\n/g, '\n')
  const { data: meta, content } = matter(raw)

  // Derive meta_description the same way getAllPosts does
  const firstPara = content
    .replace(/<!--[\s\S]*?-->/g, '')
    .split('\n')
    .map(l => l.trim())
    .find(l => l && !l.startsWith('#') && !l.startsWith('---') && !l.startsWith('>') && !l.startsWith('|') && !l.startsWith('*Last updated'))
  const derivedDesc = firstPara
    ? firstPara.replace(/\*\*/g, '').slice(0, 155)
    : ''
  const meta_description = meta.meta_description || derivedDesc

  // Extract all hero images separately
  let bodyContent = content
  const heroRegex = /<!--\s*🖼️\s*IMAGE:\s*HERO\s*([\s\S]*?)-->/g
  const heroHtmls = []
  bodyContent = bodyContent.replace(heroRegex, (match, body) => {
    heroHtmls.push(buildImageHtml(body, true))
    return ''
  })

  // Process remaining inline image placeholders
  const processedContent = processImagePlaceholders(bodyContent)

  // Extract WhatsApp CTA and split content around it
  const { before, after, label, prefill } = extractWhatsappCTA(processedContent)

  const contentBefore = await markdownToHtml(before)
  const contentAfter = after ? await markdownToHtml(after) : ''

  return {
    meta: { ...meta, meta_description },
    heroHtmls,
    contentBefore,
    contentAfter,
    whatsappLabel: label || meta.whatsapp_label,
    whatsappPrefill: prefill || meta.whatsapp_prefill,
    lastUpdated: meta.last_updated,
  }
}

async function markdownToHtml(markdown) {
  const result = await remark().use(remarkGfm).use(remarkHtml, { sanitize: false }).process(markdown)
  return result.toString()
}

function getImageDimensions(filePath) {
  try {
    const buf = Buffer.alloc(24)
    const fd = fs.openSync(filePath, 'r')
    fs.readSync(fd, buf, 0, 24, 0)
    fs.closeSync(fd)

    // JPEG: search for SOF marker (0xFF 0xC0) in first 64KB
    if (buf[0] === 0xFF && buf[1] === 0xD8) {
      const fullBuf = fs.readFileSync(filePath)
      for (let i = 2; i < fullBuf.length - 9; i++) {
        if (fullBuf[i] === 0xFF && [0xC0, 0xC1, 0xC2].includes(fullBuf[i + 1])) {
          const h = fullBuf.readUInt16BE(i + 5)
          const w = fullBuf.readUInt16BE(i + 7)
          return { width: w, height: h }
        }
      }
    }

    // PNG: IHDR chunk at bytes 16-23 (width: 16-19, height: 20-23)
    if (
      buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4E && buf[3] === 0x47
    ) {
      const w = buf.readUInt32BE(16)
      const h = buf.readUInt32BE(20)
      return { width: w, height: h }
    }

    // WebP: dimensions at different offsets depending on VP8/VP8L/VP8X
    if (
      buf[0] === 0x52 && buf[1] === 0x49 && buf[2] === 0x46 && buf[3] === 0x46
    ) {
      const fullBuf = fs.readFileSync(filePath)
      if (fullBuf.toString('ascii', 12, 16) === 'WEBP') {
        const chunk = fullBuf.toString('ascii', 16, 20)
        if (chunk === 'VP8X' && fullBuf.length >= 30) {
          const w = (fullBuf.readUInt24LE(26) & 0x00FFFFFF) + 1
          const h = (fullBuf.readUInt24LE(29) & 0x00FFFFFF) + 1
          return { width: w, height: h }
        } else if (chunk === 'VP8 ') {
          const w = fullBuf.readUInt16LE(26) & 0x3FFF
          const h = fullBuf.readUInt16LE(28) & 0x3FFF
          return { width: w, height: h }
        }
      }
    }
  } catch { /* ignore */ }
  return null
}

function buildImageHtml(body, isHero = false) {
  const filenameMatch = body.match(/filename:\s*(\S+)/)
  const altMatch = body.match(/alt:\s*"([^"]+)"/)
  const captionMatch = body.match(/caption:\s*"([^"]+)"/)

  const filename = filenameMatch ? filenameMatch[1] : ''
  const alt = altMatch ? altMatch[1] : ''
  const caption = captionMatch ? captionMatch[1] : ''

  if (filename && fs.existsSync(path.join(IMAGES_DIR, filename))) {
    const dims = getImageDimensions(path.join(IMAGES_DIR, filename))
    const dimAttr = dims ? ` width="${dims.width}" height="${dims.height}"` : ''
    return `<figure><img src="/images/blog/${filename}" alt="${alt}"${dimAttr} loading="lazy" /><figcaption>${caption}</figcaption></figure>`
  }
  const heroClass = isHero ? ' image-placeholder--hero' : ''
  const label = isHero ? 'Hero Image' : 'Reference Image'
  return `<figure class="image-placeholder${heroClass}"><div class="placeholder-box"><span class="placeholder-icon">📸</span><div class="placeholder-label">${label}</div><div class="placeholder-topic">${alt || caption}</div></div><figcaption>${caption}</figcaption></figure>`
}

function processImagePlaceholders(markdown) {
  return markdown.replace(
    /<!--\s*🖼️\s*IMAGE:\s*(?:HERO|INLINE)\s*([\s\S]*?)-->/g,
    (_, body) => buildImageHtml(body)
  )
}

function extractWhatsappCTA(markdown) {
  // Match consecutive blockquote lines (lines starting with >)
  const blockRegex = /((?:^>.*(?:\n|$))+)/gm
  let match
  let ctaBlock = null
  let ctaIndex = -1

  while ((match = blockRegex.exec(markdown)) !== null) {
    if (match[0].includes('[WHATSAPP CTA')) {
      ctaBlock = match[0]
      ctaIndex = match.index
      break
    }
  }

  if (!ctaBlock) return { before: markdown, after: '', label: null, prefill: null }

  const labelMatch = ctaBlock.match(/\*\*Button text:\*\*\s*"([^"]+)"/)
  const prefillMatch = ctaBlock.match(/\*\*Pre-filled message:\*\*\s*"([^"]+)"/)

  const label = labelMatch ? labelMatch[1] : null
  const prefill = prefillMatch ? prefillMatch[1] : null

  const before = markdown.slice(0, ctaIndex).trimEnd()
  let after = markdown.slice(ctaIndex + ctaBlock.length)
  // Strip trailing --- and *Last updated: ...* lines
  after = after.replace(/^[\s\n]*---[\s\n]*/m, '').replace(/\*Last updated:[^*]+\*/m, '').trim()

  return { before, after, label, prefill }
}
