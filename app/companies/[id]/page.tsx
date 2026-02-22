"use client";

import { useState } from "react";
import { companies } from "@/lib/data";
import { EnrichCard } from "@/components/enrich-card";
import { useParams } from "next/navigation";
import { computeMatchScore } from "@/lib/utils";
import { addToList } from "@/lib/lists";

export default function CompanyProfile() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const company = companies.find((c) => c.id === id);
  if (!company) return <div>Not found</div>;

  // 🎯 Match score
  const match = computeMatchScore(company);

  const [notes, setNotes] = useState("");

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{company.name}</h1>

      {/* 📌 Company Info Card */}
      <div className="bg-white p-6 border rounded-2xl shadow-sm space-y-2">
        <p>
          <span className="text-slate-500">Sector:</span>{" "}
          <span className="font-medium">{company.sector}</span>
        </p>
        <p>
          <span className="text-slate-500">Stage:</span>{" "}
          <span className="font-medium">{company.stage}</span>
        </p>
        <p>
          <span className="text-slate-500">Website:</span>{" "}
          <a
            href={company.website}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            Visit
          </a>
        </p>
      </div>

      {/* 🏆 Match Score Card */}
      <div className="bg-white border rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Match Score</h3>

          <div
            className={`text-2xl font-bold ${
              match.score >= 80
                ? "text-green-600"
                : match.score >= 65
                ? "text-yellow-600"
                : "text-red-600"
            }`}
          >
            {match.score}%
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <p className="text-sm font-medium text-slate-600">
            Why it matches:
          </p>

          <ul className="space-y-1">
            {match.reasons.map((reason, i) => (
              <li key={i} className="text-sm flex gap-2">
                <span className="text-green-600">✓</span>
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 📝 Notes */}
      <textarea
        placeholder="Add notes..."
        className="w-full border rounded-xl p-3 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-black/20"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      {/* ⭐ Save to Favorites */}
      <button
        onClick={() =>
          addToList("Favorites", {
            id: company.id,
            name: company.name,
          })
        }
        className="bg-slate-900 text-white px-4 py-2 rounded-xl hover:bg-slate-800 transition"
      >
        ⭐ Save to Favorites
      </button>

      {/* 🚀 Enrichment */}
      <EnrichCard website={company.website} />
    </div>
  );
}