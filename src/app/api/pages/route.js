// API endpoint: POST /api/pages
// Stores pages in-memory for demo purposes


import { demoPages } from "../../../lib/demoPages";
let pages = {};
// Pre-populate demo pages on first load
for (const page of demoPages) {
  pages[page.slug] = page;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { slug, components } = body;
    if (!slug || !Array.isArray(components)) {
      return new Response(JSON.stringify({ error: 'Invalid payload' }), { status: 400 });
    }
    pages[slug] = { slug, components };
    return new Response(JSON.stringify({ success: true, slug }), { status: 201 });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400 });
  }
}

// For demo: GET returns all pages
export async function GET() {
  return new Response(JSON.stringify(Object.values(pages)), { status: 200 });
}

// Helper for SSR/ISR to access pages
export function getPageData(slug) {
  return pages[slug] || null;
}
