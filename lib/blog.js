import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'

const CONTENT_DIR = path.join(process.cwd(), 'content/blog')
const IMAGES_DIR = path.join(process.cwd(), 'public/images/blog')

// Returns array of post metadata for listing page
export function getAllPosts() {
  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.md'))
  return files
    .map(filename => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), 'utf-8')
      const { data: meta, content } = matter(raw)
      // Derive meta_description from first non-heading, non-empty paragraph
      const firstPara = content
        .replace(/<!--[\s\S]*?-->/g, '')
        .split('\n')
        .map(l => l.trim())
        .find(l => l && !l.startsWith('#') && !l.startsWith('---') && !l.startsWith('>') && !l.startsWith('|') && !l.startsWith('*Last updated'))
      const meta_description = firstPara
        ? firstPara.replace(/\*\*/g, '').slice(0, 155)
        : ''
      return { ...meta, meta_description }
    })
    .sort((a, b) => new Date(b.publish_date) - new Date(a.publish_date))
}

// Returns full post data for individual post page
export async function getPostBySlug(slug) {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data: meta, content } = matter(raw)

  // Extract hero image separately
  let heroHtml = ''
  let bodyContent = content
  const heroRegex = /<!--\s*🖼️\s*IMAGE:\s*HERO\s*([\s\S]*?)-->/
  const heroMatch = bodyContent.match(heroRegex)
  if (heroMatch) {
    heroHtml = buildImageHtml(heroMatch[1])
    bodyContent = bodyContent.replace(heroMatch[0], '')
  }

  // Process remaining inline image placeholders
  const processedContent = processImagePlaceholders(bodyContent)

  // Extract WhatsApp CTA and split content around it
  const { before, after, label, prefill } = extractWhatsappCTA(processedContent)

  const contentBefore = await markdownToHtml(before)
  const contentAfter = after ? await markdownToHtml(after) : ''

  return {
    meta,
    heroHtml,
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

function buildImageHtml(body) {
  const filenameMatch = body.match(/filename:\s*(\S+)/)
  const altMatch = body.match(/alt:\s*"([^"]+)"/)
  const captionMatch = body.match(/caption:\s*"([^"]+)"/)
  const searchMatch = body.match(/search:\s*"([^"]+)"/)

  const filename = filenameMatch ? filenameMatch[1] : ''
  const alt = altMatch ? altMatch[1] : ''
  const caption = captionMatch ? captionMatch[1] : ''
  const search = searchMatch ? searchMatch[1] : ''

  if (filename && fs.existsSync(path.join(IMAGES_DIR, filename))) {
    return `<figure><img src="/images/blog/${filename}" alt="${alt}" loading="lazy" /><figcaption>${caption}</figcaption></figure>`
  }
  return `<figure class="image-placeholder"><div class="placeholder-box">🔍 Image needed: <strong>${filename}</strong><br/>Search: &quot;${search}&quot;</div><figcaption>${caption}</figcaption></figure>`
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
