export function computeMatchScore(company: {
  sector: string;
  website: string;
}) {
  let score = 50;
  const reasons: string[] = [];

  // thesis example (you can tweak)
  const preferredSectors = ["Fintech", "Developer Tools", "AI"];

  if (preferredSectors.includes(company.sector)) {
    score += 25;
    reasons.push(`Sector match: ${company.sector}`);
  }

  if (company.website.startsWith("https")) {
    score += 10;
    reasons.push("Secure website present");
  }

  if (company.website.includes(".com")) {
    score += 5;
    reasons.push("Commercial domain");
  }

  // cap at 100
  score = Math.min(score, 100);

  return { score, reasons };
}