import { NextResponse } from "next/server";
import * as cheerio from "cheerio";
export const runtime = "nodejs";
export async function POST(req: Request) {
  try {
    const { url } = await req.json();

    const html = await fetch(url).then((r) => r.text());
    const $ = cheerio.load(html);

    const text = $("p").first().text();

    return NextResponse.json({
      summary: text.slice(0, 160),
      keywords: ["ai", "startup", "saas"],
      signals: ["has website", "public page"],
      sources: [url],
      timestamp: new Date().toISOString(),
    });
  } catch (e) {
    return NextResponse.json({ error: "Failed to enrich" }, { status: 500 });
  }
}