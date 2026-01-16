interface StatsCardProps {
  value: string;
  label: string;
}

export function StatsCard({ value, label }: StatsCardProps) {
  return (
    <div className="absolute -bottom-6 -left-6 bg-white dark:bg-background-dark p-6 rounded-xl shadow-xl max-w-[200px] border border-slate-100 dark:border-slate-800">
      <p className="text-primary font-black text-2xl">{value}</p>
      <p className="text-slate-500 text-xs font-medium">{label}</p>
    </div>
  );
}
