export type ListItem = {
  id: string;
  name: string;
};

const STORAGE_KEY = "vc_lists";

export function getLists() {
  if (typeof window === "undefined") return {};
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
}

export function saveLists(lists: any) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lists));
}

export function addToList(listName: string, company: ListItem) {
  const lists = getLists();

  if (!lists[listName]) {
    lists[listName] = [];
  }

  const exists = lists[listName].some((c: ListItem) => c.id === company.id);
  if (!exists) {
    lists[listName].push(company);
  }

  saveLists(lists);
}