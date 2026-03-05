import { extractWhatsappCTA } from './lib/blog.js'
import fs from 'fs'
import matter from 'gray-matter'

const raw = fs.readFileSync('content/blog/how-we-source-vintage-kubota-parts-malaysia.md', 'utf-8')
const { content } = matter(raw)

// Simulate what getPostBySlug does (minus image processing)
const result = extractWhatsappCTA(content)
console.log('label:', result.label)
console.log('prefill:', result.prefill)
console.log('after (first 300 chars):', JSON.stringify(result.after.slice(0, 300)))
console.log('before ends with (last 200 chars):', JSON.stringify(result.before.slice(-200)))
