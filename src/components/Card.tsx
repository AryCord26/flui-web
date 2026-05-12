interface CardProps {
  title: string;
  value: string;
  growth?: string;
  icon?: React.ReactNode;
}

export default function Card({
  title,
  value,
  growth,
  icon,
}: CardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="bg-green-100 text-green-600 p-4 rounded-2xl">
          {icon}
        </div>
      </div>

      <p className="text-slate-500 text-sm mb-2">{title}</p>

      <h2 className="text-4xl font-bold text-slate-900 mb-2">
        {value}
      </h2>

      {growth && (
        <span className="text-green-600 text-sm font-medium">
          {growth}
        </span>
      )}
    </div>
  );
}
