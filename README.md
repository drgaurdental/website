# Dr. Gaur Dental Hospital — website

Next.js 16 (App Router) + Tailwind CSS v4. Every page is pre-rendered as static HTML for speed and SEO.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Where to edit things

| What | File |
| --- | --- |
| Phone, email, address, hours, social links, booking form URL | `src/lib/site.ts` |
| Treatments (text, FAQs, steps, images) — each one becomes a page at `/treatments/<slug>` | `src/lib/treatments.ts` |
| Doctors' profiles | `src/lib/doctors.ts` |
| Gallery photos and captions | `src/lib/gallery.ts` |
| Colours and fonts | `src/app/globals.css`, `src/app/layout.tsx` |

Change details in `src/lib/site.ts` once and the header, footer, contact page and Google structured data all update.

### Adding photos

Put new images in `src/images/…` with descriptive file names (e.g. `cases/implant-lower-molar.webp`), import them in the relevant `src/lib/*.ts` file and give them a meaningful `alt` text. Keep originals under ~300 KB (WebP, max ~1600px wide).

## SEO built in

- Unique title, description and canonical URL on every page; Open Graph and Twitter preview image (`public/og-image.jpg`)
- `sitemap.xml`, `robots.txt` and web manifest generated automatically
- Structured data (JSON-LD): `Dentist` with address, geo, hours and phone; doctors as `Person`; `FAQPage`; `BreadcrumbList`; `VideoObject`
- A dedicated, keyword-focused page for each treatment ("Root Canal Treatment in Behror", …)
- Optimised images (`next/image`, AVIF/WebP, lazy loading, blur placeholders), self-hosted fonts, videos load only when played, Google Map loads only on click

## Deploying

Works out of the box on Vercel (import the GitHub repo, no settings needed). After going live:

1. Add the site to **Google Search Console**, put the verification code in `metadata.verification` in `src/app/layout.tsx`, and submit `https://www.drgaurdental.com/sitemap.xml`.
2. Make sure the **Google Business Profile** uses exactly the same name, address and phone as `src/lib/site.ts`, and links to the website.
