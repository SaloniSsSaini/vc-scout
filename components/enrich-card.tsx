"use client";

import { useState } from "react";

export function EnrichCard({ website }: { website: string }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);

  const handleEnrich = async () => {
    setLoading(true);

    const res = await fetch("/api/enrich", {
      method: "POST",
      body: JSON.stringify({ url: website }),
    });

    const json = await res.json();
    setData(json);
    setLoading(false);
  };

  return (
    <div className="border rounded-2xl p-5 bg-white shadow-sm">
      {/* 🚀 Premium Button */}
      <button
        onClick={handleEnrich}
        disabled={loading}
        className="bg-black text-white px-5 py-2.5 rounded-xl font-medium hover:bg-black/90 disabled:opacity-50 transition"
      >
        {loading ? "Enriching..." : "✨ Enrich Company"}
      </button>

      {/* 💀 Loading Skeleton */}
      {loading && (
        <div className="mt-4 space-y-2 animate-pulse">
          <div className="h-4 bg-slate-200 rounded w-3/4" />
          <div className="h-4 bg-slate-200 rounded w-1/2" />
          <div className="h-4 bg-slate-200 rounded w-2/3" />
        </div>
      )}

      {/* 📊 Result */}
      {data && !loading && (
        <div className="mt-5 space-y-2 text-sm">
          <p>
            <span className="text-slate-500">Summary:</span>{" "}
            <span className="font-medium">{data.summary}</span>
          </p>
          <p>
            <span className="text-slate-500">Keywords:</span>{" "}
            {data.keywords?.join(", ")}
          </p>
          <p>
            <span className="text-slate-500">Signals:</span>{" "}
            {data.signals?.join(", ")}
          </p>
          <p className="text-xs text-gray-500">
            Source: {data.sources?.[0]}
          </p>
        </div>
      )}
    </div>
  );
}