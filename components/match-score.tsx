"use client";

export function MatchScore({ score }: { score: number }) {
  const color =
    score >= 80
      ? "bg-green-500"
      : score >= 60
      ? "bg-yellow-500"
      : "bg-red-500";

  const label =
    score >= 80 ? "High Fit" : score >= 60 ? "Medium Fit" : "Low Fit";

  return (
    <div className="bg-white border rounded-2xl p-4 shadow-sm space-y-2">
      <div className="flex justify-between text-sm font-medium">
        <span>Match Score</span>
        <span>{score}%</span>
      </div>

      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} transition-all`}
          style={{ width: `${score}%` }}
        />
      </div>

      <p className="text-xs text-slate-500">{label}</p>
    </div>
  );
}