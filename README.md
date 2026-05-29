# BOMALOGIC AUTOMATION

Static marketing website for BOMALOGIC AUTOMATION, ready for GitHub Pages or any static host.

## What’s included

- sharp, mobile-friendly landing page
- pricing page at `#/pricing`
- FAQ page at `#/faq`
- deployment request form that opens WhatsApp and email drafts
- lightweight image-led design

## Pricing

The site includes these plans:

- Starter Tier: KSh 4,500/month
- Business Tier: KSh 7,500/month
- Premium Tier: KSh 15,000/month

Every tier includes a one-time setup fee of KSh 3,000, and clients bring their own API key.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Production build

```bash
npm run build
```

The production-ready files are generated in `dist/`.

## GitHub deployment

1. Create a GitHub repository and push this project to it.
2. Run `npm run build`.
3. Publish the `dist/` folder using GitHub Pages, or connect the repo to another static host.
4. Use the hash routes already built into the site:
   - `#/pricing`
   - `#/faq`
   - `#/deployment`

## Form behavior

The request form is static and works without a backend:

- it opens WhatsApp with the request details
- it also prepares an email draft to `info@bomalogic.com`

This makes the site easy to host on GitHub without Docker or a VPS app server.
