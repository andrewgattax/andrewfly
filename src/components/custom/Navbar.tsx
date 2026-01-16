import { useTranslation } from 'react-i18next';
import { LanguageSelector } from './LanguageSelector';

export function Navbar() {
  const { t } = useTranslation();

  const navLinks = [
    { href: '#services', label: t('navbar.services') },
    { href: '#projects', label: t('navbar.projects') },
    { href: '#certifications', label: t('navbar.certifications') },
    { href: '#about', label: t('navbar.about') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <div className="flex items-center gap-3">
          <div className="text-primary">
            <svg className="size-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-xl font-black tracking-tight uppercase">Andrew Sky</h2>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSelector />
          <a
            href="#contact"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm"
          >
            {t('navbar.contact')}
          </a>
        </div>
      </div>
    </header>
  );
}
