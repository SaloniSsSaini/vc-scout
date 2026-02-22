"use client";

import Link from "next/link";
import { Company } from "@/lib/data";
import { EmptyState } from "./empty-state";

type Props = {
  companies: Company[];
  page: number;
  setPage: (p: number) => void;
  pageSize?: number;
};

export function CompanyTable({
  companies,
  page,
  setPage,
  pageSize = 5,
}: Props) {
  const totalPages = Math.max(
    1,
    Math.ceil(companies.length / pageSize)
  );

  const paginated = companies.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <div className="space-y-4">
      {/* results count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">
          Showing {paginated.length} of {companies.length} companies
        </p>
      </div>

      {/* table */}
      <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
        <table className="w-full">
          {/* ✅ sticky header */}
          <thead className="bg-slate-100 text-sm sticky top-0 z-10">
            <tr>
              <th className="p-3 text-left font-semibold">Company</th>
              <th className="p-3 text-left font-semibold">Sector</th>
              <th className="p-3 text-left font-semibold">Stage</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {/* ✅ professional empty state */}
            {paginated.length === 0 && (
              <tr>
                <td colSpan={3} className="p-6">
                  <EmptyState />
                </td>
              </tr>
            )}

            {paginated.map((c) => (
              <tr
                key={c.id}
                className="border-t hover:bg-slate-50 transition"
              >
                <td className="p-3 font-medium text-blue-600">
                  <Link href={`/companies/${c.id}`}>
                    {c.name}
                  </Link>
                </td>

                <td className="p-3 text-slate-600">{c.sector}</td>

                <td className="p-3">
                  <span className="px-2 py-1 rounded-full text-xs bg-slate-100">
                    {c.stage}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* pagination */}
      <div className="flex items-center justify-center gap-2 pt-2">
        <button
          onClick={() => setPage(Math.max(1, page - 1))}
          disabled={page === 1}
          className="px-3 py-1 border rounded-lg disabled:opacity-40"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }).map((_, i) => {
          const pageNum = i + 1;
          return (
            <button
              key={pageNum}
              onClick={() => setPage(pageNum)}
              className={`px-3 py-1 rounded-lg border ${
                page === pageNum
                  ? "bg-black text-white"
                  : "bg-white"
              }`}
            >
              {pageNum}
            </button>
          );
        })}

        <button
          onClick={() =>
            setPage(Math.min(totalPages, page + 1))
          }
          disabled={page === totalPages}
          className="px-3 py-1 border rounded-lg disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}