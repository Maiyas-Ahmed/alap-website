import React, { useState } from 'react';
import emblemImg from '../assets/images/alap_brand_emblem_1794746096092.jpg';
import type { SiteTranslations } from '../data/translations';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { UPDATES_SITE_URL } from '../utils/release';
import { DownloadArrowIcon, ExternalArrowIcon } from './Icons';

interface FooterProps {
  t: SiteTranslations;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ t, onOpenPrivacy }) => {
  const [imgError, setImgError] = useState(false);
  const { isInstallable, isInstalled, install } = usePWAInstall();

  return (
    <footer className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 border-b border-slate-200 pb-8 sm:flex-row sm:items-center">
          <div className="flex items-start gap-3.5">
            {!imgError ? (
              <img
                src={emblemImg}
                alt="Alap logo"
                width={36}
                height={36}
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="h-9 w-9 shrink-0 rounded-lg border border-slate-200 object-cover"
              />
            ) : (
              <span
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#008069] text-sm font-bold text-white"
              >
                A
              </span>
            )}
            <div>
              <p className="text-base font-bold tracking-tight text-[#111B21]">
                {t.brandName}
              </p>
              <p className="mt-0.5 text-sm text-slate-600">{t.footer.tagline}</p>
              <p className="mt-1 font-mono text-xs text-slate-500">
                {t.footer.packageText}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600">
            <a
              href="#features"
              className="whitespace-nowrap py-1 hover:text-[#111B21] transition-colors"
            >
              {t.nav.features}
            </a>
            <a
              href="#install-guide"
              className="whitespace-nowrap py-1 hover:text-[#111B21] transition-colors"
            >
              {t.nav.install}
            </a>
            <a
              href="#faq"
              className="whitespace-nowrap py-1 hover:text-[#111B21] transition-colors"
            >
              {t.nav.faq}
            </a>
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="cursor-pointer whitespace-nowrap py-1 hover:text-[#111B21] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008069]"
            >
              {t.footer.privacyBtn}
            </button>
            <a
              href={UPDATES_SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 whitespace-nowrap py-1 text-[#008069] hover:underline underline-offset-4"
            >
              <span>{t.footer.updatesLink}</span>
              <ExternalArrowIcon className="h-3.5 w-3.5" />
            </a>

            {isInstallable && !isInstalled && (
              <button
                type="button"
                onClick={install}
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-[#111B21] transition-colors hover:border-[#008069]/40 hover:text-[#008069]"
              >
                <DownloadArrowIcon className="h-3.5 w-3.5" />
                <span>{t.pwa.installWebApp}</span>
              </button>
            )}
          </div>
        </div>

        <p className="mt-6 text-xs text-slate-500">{t.footer.copyright}</p>
      </div>
    </footer>
  );
};
