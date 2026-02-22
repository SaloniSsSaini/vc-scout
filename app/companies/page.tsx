"use client";

import { useState } from "react";
import { companies } from "@/lib/data";
import { useGlobalSearch } from "@/lib/useGlobalSearch";
import { saveSearch } from "@/lib/savedSearches";
import { useSearchParams } from "next/navigation";
import { CompanyTable } from "@/components/company-table";

export default function CompaniesPage() {
  // 🔥 global "/" focus shortcut
  useGlobalSearch("company-search");

  // 🔗 read query from URL
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  const [page, setPage] = useState(1);

  // 🔍 filter logic
  const filtered = companies.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Companies</h2>

      {/* 🔍 Search */}
      <input
        id="company-search"
        placeholder="Search companies... (Press /)"
        className="w-full max-w-md px-4 py-2 border rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-black/20 mb-4"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setPage(1); // reset page on search
        }}
      />

      {/* 💾 Save Search */}
      <div className="flex items-center gap-2 mb-4">
        <button
          onClick={() => saveSearch(query)}
          disabled={!query.trim()}
          className="px-4 py-2 rounded-xl bg-black text-white disabled:opacity-40"
        >
          💾 Save Search
        </button>
      </div>

      {/* 🎨 Results Count */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-slate-500">
          Showing {filtered.length} companies
        </p>
      </div>

      {/* ✅ SINGLE SOURCE OF TRUTH TABLE */}
      <CompanyTable
        companies={filtered}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}