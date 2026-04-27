# Blog Post Drafts — How to Manage & Publish

## Current Draft Posts

| File | Topic | Scheduled |
|---|---|---|
| `kubota-v1505-engine-parts-malaysia.md` | Kubota V1505 engine parts deep-dive | 2026-05-15 |
| `yanmar-marine-engine-parts-malaysia.md` | Yanmar marine engine parts guide | 2026-05-20 |
| `yanmar-3tnv88-engine-parts-malaysia.md` | Yanmar 3TNV88 engine parts deep-dive | 2026-06-05 |
| `massey-ferguson-tractor-parts-malaysia.md` | Massey Ferguson / Perkins parts guide | 2026-06-12 |

---

## How to Publish a Draft Post

1. Open the `.md` file in `content/blog/`
2. In the frontmatter (the `---` block at the top), make two changes:
   - Remove the `draft: true` line **or** change it to `draft: false`
   - Set `publish_date` to today's date (format: `YYYY-MM-DD`)
3. Commit and push — the post will appear on `/blog` after the next deploy

```diff
 ---
 id: blog-07
 slug: kubota-v1505-engine-parts-malaysia
 title: "Kubota V1505 Engine Parts Malaysia: ..."
-draft: true
-publish_date: "2026-05-15"
+publish_date: "2026-04-28"
 ...
 ---
```

> **Note:** In local dev (`npm run dev`), **all** draft posts are visible regardless of date or draft flag — so you can preview them before publishing.

---

## How to Edit a Draft Post

All post content is standard Markdown with a few extensions:

### Front matter fields

| Field | Required | Description |
|---|---|---|
| `id` | Yes | Unique ID — increment from highest existing (currently blog-11) |
| `slug` | Yes | URL path — e.g. `kubota-v1505-engine-parts-malaysia` → `/blog/kubota-v1505-engine-parts-malaysia` |
| `title` | Yes | H1 and `<title>` tag |
| `meta_description` | Yes | 145–160 chars. Shown in Google search results. |
| `meta_keywords` | Yes | Array of 4–6 keyword phrases |
| `author` | No | Defaults to "SourceSage Editorial" |
| `publish_date` | Yes | `YYYY-MM-DD` format |
| `last_updated` | Yes | Update whenever you edit content |
| `draft` | No | `true` = hidden in production, visible in dev. Remove or set `false` to publish. |
| `whatsapp_label` | Yes | Button label on the mid-post WhatsApp CTA |
| `whatsapp_prefill` | Yes | Pre-filled WhatsApp message (keep specific to the post topic) |
| `hero_image` | No | Filename only (e.g. `blog-07-hero.jpg`) — place file in `public/images/blog/`. If missing, a styled placeholder renders. |
| `related_page` | No | Path to brand landing page (e.g. `/kubota-tractor-parts-malaysia`). Shows a "View parts" banner at end of post. |

### Image placeholders

Images are referenced in HTML comments inside the Markdown:

```markdown
<!-- 🖼️ IMAGE: HERO
alt: "Description of the image"
caption: "Caption shown below image"
filename: blog-07-hero-image.jpg
-->
```

If the file exists in `public/images/blog/`, it renders as a real image.
If the file is **missing**, a styled placeholder box renders automatically — no broken images.

### WhatsApp CTA block

The mid-post WhatsApp button is driven by a blockquote marker in the Markdown:

```markdown
> 📱 **[WHATSAPP CTA — PLACEHOLDER]**
> **Button text:** "Your button label here"
> **Pre-filled message:** "Hi, I need..."
```

This block is extracted at build time and replaced with the actual button component. Everything before it renders as `contentBefore`; everything after as `contentAfter`.

---

## How to Create a New Post

```bash
# Use the script (creates a dated draft from the template)
bash scripts/new-post.sh your-post-slug-here

# Then edit the generated file
code content/blog/your-post-slug-here.md
```

The script copies `_template.md` with today's date pre-filled and `draft: true` set.

---

## Checklist Before Publishing

- [ ] `meta_description` is 145–160 characters and includes the main keyword
- [ ] `publish_date` is set to today or a past date
- [ ] `draft: true` line is removed or changed to `draft: false`
- [ ] `related_page` is set if there's a matching brand landing page
- [ ] `whatsapp_prefill` message is specific to the post topic
- [ ] `last_updated` reflects today's date
- [ ] Run `npm run dev` and visit the post to preview before deploying
