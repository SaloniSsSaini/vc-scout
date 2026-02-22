"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const path = usePathname();

  const linkClass = (href: string) =>
    `px-3 py-2 rounded-lg text-sm transition ${
      path === href
        ? "bg-black text-white"
        : "text-slate-600 hover:bg-slate-100"
    }`;

  return (
    <aside className="w-64 border-r bg-white p-4 hidden md:block">
      <h1 className="text-xl font-bold mb-6">VC Scout</h1>

      <nav className="flex flex-col gap-2">
        <Link href="/companies" className={linkClass("/companies")}>
          Companies
        </Link>
        <Link href="/lists" className={linkClass("/lists")}>
          Lists
        </Link>
        <Link href="/saved" className={linkClass("/saved")}>
          Saved Searches
        </Link>
      </nav>
    </aside>
  );
}