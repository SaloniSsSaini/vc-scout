export function TableSkeleton() {
  return (
    <div className="bg-white border rounded-xl p-4 animate-pulse">
      <div className="h-4 bg-slate-200 rounded w-1/3 mb-4" />

      <div className="space-y-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-8 bg-slate-100 rounded" />
        ))}
      </div>
    </div>
  );
}