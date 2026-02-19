import { useTranslation } from 'react-i18next';
import { Globe, Mail, FileText } from 'lucide-react';
import { LogoFull } from './logofull';
import { TextLogo } from './textlogo';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-white dark:bg-background-dark border-t border-slate-100 dark:border-slate-800 py-16">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-0 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <TextLogo />
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
