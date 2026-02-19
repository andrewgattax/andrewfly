import { useTranslation } from 'react-i18next';
import { LanguageSelector } from './LanguageSelector';
import { TextLogo } from './textlogo';

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
      <div className="max-w-[1280px] mx-auto px-6 lg:px-0 flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-3">
          <TextLogo />
        </a>

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
