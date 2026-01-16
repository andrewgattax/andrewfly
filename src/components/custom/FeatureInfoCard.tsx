import type { LucideIcon } from 'lucide-react';

interface FeatureInfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureInfoCard({ icon: Icon, title, description }: FeatureInfoCardProps) {
  return (
    <div className="bg-white dark:bg-background-dark p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
      <Icon className="text-primary mb-2 w-6 h-6" />
      <p className="text-slate-900 dark:text-white font-bold text-sm">{title}</p>
      <p className="text-slate-500 text-xs">{description}</p>
    </div>
  );
}
