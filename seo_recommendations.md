🚨 SEO FIX DIRECTIVE – REQUIRED ARCHITECTURE CHANGE

Current State:
The site is a Vite + React SPA using 100% client-side rendering.
The server returns only:

  <div id="root"></div>

All meaningful content is injected via JavaScript.

This is unacceptable for SEO and organic discoverability.

---

OBJECTIVE

All public-facing pages must return fully rendered HTML
from the server or at build time.

Google must be able to read all primary content
without executing JavaScript.

---

MANDATORY REQUIREMENTS

1. Rendering Strategy

Choose ONE:

A) Migrate to Next.js (Preferred)
   - Use App Router
   - SSR or Static Site Generation for all marketing pages
   - Ensure each route returns full HTML

OR

B) Implement Static Pre-rendering in current Vite setup
   - Pre-render each public route at build time
   - Output static HTML files containing full content

Pure CSR is NOT allowed for public pages.

---

2. Pages That Must Be Server-Rendered

- Homepage
- Features pages
- Industry pages
- Landing pages
- Blog posts
- All SEO-targeted pages

Authenticated dashboard/app pages may remain CSR.

---

3. Verification Rule (Non-Negotiable)

When running:

  curl https://domain.com/page

The returned HTML MUST contain:

- H1
- Body text
- Internal links
- Structured content

If response only contains <div id="root"></div>,
implementation is considered failed.

Also verify:
- "View Page Source" shows full content
- Google Search Console URL inspection renders correctly

---

4. Metadata Requirements (Per Page)

Each indexable page must have:

- Unique <title>
- Unique meta description
- Canonical tag
- Open Graph tags
- Structured data (JSON-LD where relevant)

No duplicate titles across pages.

---

5. Routing Rules

- No hash routing (#/route)
- Clean URLs (/features, /marine-ai)
- Proper HTTP status codes (200, 301, 404)
- Implement sitemap.xml
- Implement robots.txt

---

6. Performance Requirements

- LCP < 2.5s
- Minimize blocking JS
- Optimize images
- Lazy load non-critical components

---

ACCEPTANCE CRITERIA

The site is considered SEO-ready ONLY IF:

[ ] Raw HTML contains full page content
[ ] No JS required to see primary content
[ ] Metadata is unique per route
[ ] Sitemap generated and accessible
[ ] Pages successfully indexed by Google

---

This is a required infrastructure correction.
Do not ship additional marketing efforts until fixed.