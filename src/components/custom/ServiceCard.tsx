import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

export function ServiceCard({ icon: Icon, title, description, linkText, linkHref }: ServiceCardProps) {
  return (
    <div className="group p-8 rounded-2xl bg-white border border-slate-100 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(17,164,212,0.15)] transition-all duration-500 dark:bg-slate-900 dark:border-slate-800">
      <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{description}</p>
      <a className="text-primary font-bold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all" href={linkHref}>
        {linkText} <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}
