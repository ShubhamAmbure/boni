This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Bino Bot Next.js Demo

## Overview
This is a Next.js app that can create brand-new pages on demand via a POST API. Each page is composed of reusable components (Card, ImageBlock, TextSection, StatsBox, CustomButton).

## API Endpoint

### Create a Page
- **POST** `/api/pages`
- **Body:**
```json
{
  "slug": "your-page-slug",
  "components": [
    { "type": "TextSection", "props": { "title": "Hello!", "text": "Welcome." } },
    { "type": "ImageBlock", "props": { "src": "/globe.svg", "alt": "Globe" } }
  ]
}
```
- **Response:** `{ "success": true, "slug": "your-page-slug" }`

#### Example curl
```sh
curl -X POST https://<your-deployment-url>/api/pages \
  -H "Content-Type: application/json" \
  -d '{
    "slug": "test-page",
    "components": [
      { "type": "TextSection", "props": { "title": "Test", "text": "This is a test page." } },
      { "type": "ImageBlock", "props": { "src": "/globe.svg", "alt": "Globe" } }
    ]
  }'
```

## Demo Pages
- [Hello World](https://<your-deployment-url>/hello-world)
- [Bino Bot](https://<your-deployment-url>/bino-bot)

## Components
- Card
- ImageBlock
- TextSection
- StatsBox
- CustomButton (CTA)

## Deployment
Deploy on [Vercel](https://vercel.com/) above with your live URL.

---

**Enjoy creating pages on demand!**
