export function EmptyState({
  title = "No companies found",
  subtitle = "Try adjusting your search",
}) {
  return (
    <div className="bg-white border rounded-2xl p-10 text-center shadow-sm">
      <div className="text-4xl mb-3">🔍</div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-slate-500 mt-1">{subtitle}</p>
    </div>
  );
}