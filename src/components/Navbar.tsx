import React, { useState } from 'react';
import emblemImg from '../assets/images/alap_brand_emblem_1794746096092.jpg';
import type { Language, SiteTranslations } from '../data/translations';

interface NavbarProps {
  lang: Language;
  onChangeLang: (lang: Language) => void;
  t: SiteTranslations;
  onOpenPrivacy: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onChangeLang,
  t,
  onOpenPrivacy,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:gap-8 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          className="flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-lg py-1 text-[#111B21] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008069]"
        >
          {!imgError ? (
            <img
              src={emblemImg}
              alt="Alap logo"
              width={32}
              height={32}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="h-8 w-8 shrink-0 rounded-lg border border-slate-200 object-cover"
            />
          ) : (
            <span
              aria-hidden="true"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#008069] text-sm font-bold text-white"
            >
              A
            </span>
          )}
          <span className="text-lg font-bold tracking-tight whitespace-nowrap">
            {t.brandName}
          </span>
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600"
        >
          <a
            href="#features"
            className="whitespace-nowrap shrink-0 py-1 hover:text-[#111B21] hover:underline underline-offset-4 decoration-[#008069] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008069]"
          >
            {t.nav.features}
          </a>
          <a
            href="#install-guide"
            className="whitespace-nowrap shrink-0 py-1 hover:text-[#111B21] hover:underline underline-offset-4 decoration-[#008069] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008069]"
          >
            {t.nav.install}
          </a>
          <a
            href="#faq"
            className="whitespace-nowrap shrink-0 py-1 hover:text-[#111B21] hover:underline underline-offset-4 decoration-[#008069] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008069]"
          >
            {t.nav.faq}
          </a>
          <button
            type="button"
            onClick={onOpenPrivacy}
            className="whitespace-nowrap shrink-0 cursor-pointer py-1 hover:text-[#111B21] hover:underline underline-offset-4 decoration-[#008069] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008069]"
          >
            {t.nav.privacy}
          </button>
        </nav>

        {/* Zone 3: Language Switcher (English / বাংলা) */}
        <div
          role="group"
          aria-label="Language switcher"
          className="flex shrink-0 items-center rounded-lg border border-slate-200 bg-slate-50 p-0.5"
        >
          <button
            type="button"
            onClick={() => onChangeLang('en')}
            aria-pressed={lang === 'en'}
            className={`min-h-[34px] cursor-pointer rounded-md px-3 py-1 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#008069] ${
              lang === 'en'
                ? 'bg-[#008069] text-white'
                : 'text-slate-600 hover:text-[#111B21]'
            }`}
          >
            English
          </button>
          <button
            type="button"
            onClick={() => onChangeLang('bn')}
            aria-pressed={lang === 'bn'}
            className={`min-h-[34px] cursor-pointer rounded-md px-3 py-1 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#008069] ${
              lang === 'bn'
                ? 'bg-[#008069] text-white'
                : 'text-slate-600 hover:text-[#111B21]'
            }`}
          >
            বাংলা
          </button>
        </div>
      </div>
    </header>
  );
};
