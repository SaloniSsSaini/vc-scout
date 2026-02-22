export type SavedSearch = {
  id: string;
  query: string;
  createdAt: string;
};

const KEY = "vc_saved_searches";

export function getSavedSearches(): SavedSearch[] {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem(KEY) || "[]");
}

export function saveSearch(query: string) {
  const existing = getSavedSearches();

  // avoid duplicates
  if (existing.some((s) => s.query === query)) return;

  const newSearch: SavedSearch = {
    id: crypto.randomUUID(),
    query,
    createdAt: new Date().toISOString(),
  };

  localStorage.setItem(
    KEY,
    JSON.stringify([newSearch, ...existing])
  );
}

export function deleteSearch(id: string) {
  const updated = getSavedSearches().filter((s) => s.id !== id);
  localStorage.setItem(KEY, JSON.stringify(updated));
}