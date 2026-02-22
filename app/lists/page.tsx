"use client";

import { useEffect, useState } from "react";
import { getLists, saveLists } from "@/lib/lists";

export default function ListsPage() {
  const [lists, setLists] = useState<any>({});

  useEffect(() => {
    setLists(getLists());
  }, []);

  const removeCompany = (listName: string, id: string) => {
    const updated = { ...lists };
    updated[listName] = updated[listName].filter((c: any) => c.id !== id);
    saveLists(updated);
    setLists(updated);
  };

  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(lists, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "lists.json";
    a.click();
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Lists</h1>

      <button
        onClick={exportJSON}
        className="bg-black text-white px-4 py-2 rounded-xl"
      >
        Export JSON
      </button>

      {Object.keys(lists).length === 0 && (
        <p className="text-slate-500">No saved companies yet.</p>
      )}

      {Object.entries(lists).map(([listName, companies]: any) => (
        <div
          key={listName}
          className="bg-white border rounded-2xl p-4 shadow-sm"
        >
          <h2 className="font-semibold mb-3">{listName}</h2>

          <ul className="space-y-2">
            {companies.map((c: any) => (
              <li
                key={c.id}
                className="flex justify-between items-center border rounded-lg p-2"
              >
                <span>{c.name}</span>

                <button
                  onClick={() => removeCompany(listName, c.id)}
                  className="text-red-600 text-sm"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}