interface TableProps {
  headers: string[];
  children: React.ReactNode;
}

export default function Table({
  headers,
  children,
}: TableProps) {
  return (
    <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden">
      <div
        className={`grid grid-cols-${headers.length} gap-4 px-8 py-5 border-b border-slate-100 text-sm font-semibold text-slate-500`}
      >
        {headers.map((header) => (
          <span key={header}>{header}</span>
        ))}
      </div>

      <div>{children}</div>
    </div>
  );
}
