import { writeFileSync } from 'node:fs'
import { advocate } from '../src/data/advocate.js'
import { practiceAreas } from '../src/data/practiceAreas.js'
import { blogPosts } from '../src/data/blogPosts.js'

const configuredUrl = process.env.SITE_URL || advocate.website
let baseUrl = ''
if (configuredUrl) {
  try {
    const url = new URL(configuredUrl)
    if (url.protocol === 'https:' || url.protocol === 'http:') baseUrl = url.origin
  } catch {
    console.warn('Sitemap skipped: SITE_URL / advocate.website is not a valid absolute URL.')
  }
}

const routes = [
  '/', '/about-advocate/', '/practice-areas/', ...practiceAreas.map((area) => `/${area.slug}/`),
  '/legal-resources/', ...blogPosts.map((post) => `/legal-resources/${post.slug}/`),
  '/faqs/', '/contact/', '/privacy-policy/', '/disclaimer/',
]
const xmlSafe = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
const entries = baseUrl ? routes.map((route) => `  <url><loc>${xmlSafe(`${baseUrl}${route}`)}</loc></url>`).join('\n') : ''
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries ? `\n${entries}\n` : ''}</urlset>\n`
writeFileSync(new URL('../public/sitemap.xml', import.meta.url), sitemap, 'utf8')

const robots = `User-agent: *\nAllow: /\n${baseUrl ? `Sitemap: ${baseUrl}/sitemap.xml\n` : ''}`
writeFileSync(new URL('../public/robots.txt', import.meta.url), robots, 'utf8')
if (!baseUrl) console.info('No site URL configured; sitemap is empty. Set SITE_URL or advocate.website before deployment.')
