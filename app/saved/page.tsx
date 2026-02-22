"use client";

import { useEffect, useState } from "react";
import {
  getSavedSearches,
  deleteSearch,
  SavedSearch,
} from "@/lib/savedSearches";
import { useRouter } from "next/navigation";

export default function SavedPage() {
  const [searches, setSearches] = useState<SavedSearch[]>([]);
  const router = useRouter();

  useEffect(() => {
    setSearches(getSavedSearches());
  }, []);

  const rerunSearch = (query: string) => {
    router.push(`/companies?q=${encodeURIComponent(query)}`);
  };

  const handleDelete = (id: string) => {
    deleteSearch(id);
    setSearches(getSavedSearches());
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Saved Searches</h1>

      {searches.length === 0 && (
        <p className="text-slate-500">No saved searches yet.</p>
      )}

      <div className="space-y-3">
        {searches.map((s) => (
          <div
            key={s.id}
            className="bg-white border rounded-2xl p-4 flex justify-between items-center"
          >
            <div>
              <p className="font-medium">{s.query}</p>
              <p className="text-xs text-slate-500">
                {new Date(s.createdAt).toLocaleString()}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => rerunSearch(s.query)}
                className="px-3 py-1 rounded-lg border"
              >
                Run
              </button>

              <button
                onClick={() => handleDelete(s.id)}
                className="px-3 py-1 rounded-lg text-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}