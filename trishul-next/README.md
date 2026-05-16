# Trishul Aero — Next.js

Cinematic aerospace + autonomous-systems marketing site, built with Next.js 14 (App Router), TypeScript, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Build for production

```bash
npm run build
npm start
```

## Structure

```
app/
  layout.tsx        # Root layout — Nav, Footer, SiteEffects, fonts, global CSS
  globals.css       # Full design system (1k lines — palette, type, motion, HUD)
  page.tsx          # Homepage (10 sections)
  products/
    page.tsx        # Fleet catalogue (7 systems)
    kalki/
      page.tsx      # Kalki UCAV detail page (template for other systems)
  about/page.tsx
  contact/page.tsx
  careers/page.tsx

components/
  Nav.tsx           # Sticky nav, scroll-aware, active-link
  Footer.tsx        # Brand + sitemap + newsletter
  Logo.tsx          # Single swap point for the brand mark
  SiteEffects.tsx   # Canvas particles, scroll reveal, cursor glow, HUD ticker

public/
  logo.png          # Drop your PNG here — picked up automatically (see "Logo" below)
  logo.svg          # Fallback used for the tab icon if logo.png is absent
```

## Logo

The site renders `public/logo.png` everywhere — drop your file there and it's used immediately (no code changes).

- Recommended: transparent background, square aspect (1024×1024), white artwork
- If your file isn't square, pass `aspect={height/width}` to the `<Logo>` component in `components/Nav.tsx` / `components/Footer.tsx`
- A placeholder `logo.svg` is included as fallback for the browser tab icon if `logo.png` is missing

## Design system

The entire visual language lives in `app/globals.css`. Palette tokens (`--bg`, `--accent`, etc.) are at the top — adjust there to retheme. The motion primitives (`.reveal`, `.reveal-stagger`) are driven by an `IntersectionObserver` in `SiteEffects.tsx`.

## Next steps

- Add MDX-driven product/news entries (`/content/products/*.mdx`)
- Wire the contact form to an API route (`app/api/contact/route.ts`)
- Add a sitemap and `robots.txt`
- Plug images through `next/image` and Cloudinary
