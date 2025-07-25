const LOCAL_STORAGE_KEY = 'dynamic_pages';

export function savePage(slug, components) {
  if (typeof window === 'undefined') return;
  const existing = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{}');
  existing[slug] = components;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(existing));
}

export function getAllPages() {
  if (typeof window === 'undefined') return {};
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{}');
}

export function getPage(slug) {
  if (typeof window === 'undefined') return null;
  const all = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{}');
  return all[slug] || null;
}

export function deletePage(slug) {
  if (typeof window === 'undefined') return;
  const existing = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{}');
  delete existing[slug];
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(existing));
}

