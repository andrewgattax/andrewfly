import { useTranslation } from 'react-i18next';
import { Globe, Mail, FileText } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-white dark:bg-background-dark border-t border-slate-100 dark:border-slate-800 py-16">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="text-slate-400">
            <svg className="size-6" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold tracking-tight uppercase text-slate-900 dark:text-white">Andrew Sky</h2>
        </div>

        <p className="text-slate-400 text-sm">
          {t('footer.copyright')}
        </p>

        <div className="flex gap-6">
          <a className="text-slate-400 hover:text-primary transition-colors" href="#" aria-label="Website">
            <Globe className="w-5 h-5" />
          </a>
          <a className="text-slate-400 hover:text-primary transition-colors" href="mailto:info@andrewsky.com" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
          <a className="text-slate-400 hover:text-primary transition-colors" href="#" aria-label="Documentation">
            <FileText className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
