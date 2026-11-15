/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useState } from 'react';
import { FaqAccordion } from './components/FaqAccordion';
import { FeaturesGrid } from './components/FeaturesGrid';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { InstallGuide } from './components/InstallGuide';
import { Navbar } from './components/Navbar';
import { PrivacyModal } from './components/PrivacyModal';
import { ShowcaseSection } from './components/ShowcaseSection';
import { TRANSLATIONS, type Language } from './data/translations';
import { useOnlineStatus } from './hooks/usePWAInstall';
import {
  fetchLiveRelease,
  readCachedRelease,
  type ReleaseFetchResult,
} from './utils/release';

const LANG_STORAGE_KEY = 'alap_site_lang_v1';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
      return saved === 'bn' ? 'bn' : 'en';
    } catch {
      return 'en';
    }
  });

  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isLoadingRelease, setIsLoadingRelease] = useState(true);
  const [releaseState, setReleaseState] = useState<ReleaseFetchResult>(() => {
    const cached = readCachedRelease();
    if (cached) {
      return {
        status: 'cached',
        release: cached,
        errorMessage: null,
      };
    }
    return {
      status: 'offline',
      release: null,
      errorMessage: null,
    };
  });

  const isOnline = useOnlineStatus();
  const t = TRANSLATIONS[lang];

  const handleLanguageChange = (nextLang: Language) => {
    setLang(nextLang);
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, nextLang);
    } catch {
      // Ignore storage errors
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang === 'bn' ? 'bn' : 'en';
  }, [lang]);

  const loadRelease = useCallback(async () => {
    setIsLoadingRelease(true);
    const result = await fetchLiveRelease();
    setReleaseState(result);
    setIsLoadingRelease(false);
  }, []);

  useEffect(() => {
    void loadRelease();
  }, [loadRelease]);

  return (
    <div className="min-h-screen bg-white text-[#111B21]">
      <Navbar
        lang={lang}
        onChangeLang={handleLanguageChange}
        t={t}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />

      <nav
        aria-label="Mobile sections"
        className="flex items-center justify-between gap-2 overflow-x-auto border-b border-slate-200 bg-white px-4 py-2.5 text-xs font-medium text-slate-600 md:hidden"
      >
        <a href="#features" className="whitespace-nowrap shrink-0 py-1 hover:text-[#111B21]">
          {t.nav.features}
        </a>
        <a href="#install-guide" className="whitespace-nowrap shrink-0 py-1 hover:text-[#111B21]">
          {t.nav.install}
        </a>
        <a href="#faq" className="whitespace-nowrap shrink-0 py-1 hover:text-[#111B21]">
          {t.nav.faq}
        </a>
        <button
          type="button"
          onClick={() => setIsPrivacyOpen(true)}
          className="cursor-pointer whitespace-nowrap shrink-0 py-1 hover:text-[#111B21]"
        >
          {t.nav.privacy}
        </button>
      </nav>

      {!isOnline && (
        <div
          role="status"
          className="border-b border-slate-200 bg-slate-50 px-4 py-2 text-center text-xs font-medium text-slate-700"
        >
          {t.pwa.offlineBanner}
        </div>
      )}

      <main>
        <Hero
          lang={lang}
          t={t}
          releaseState={releaseState}
          isLoading={isLoadingRelease}
          onRetry={loadRelease}
        />
        <ShowcaseSection t={t} />
        <FeaturesGrid t={t} />
        <InstallGuide t={t} />
        <FaqAccordion t={t} />
      </main>

      <Footer t={t} onOpenPrivacy={() => setIsPrivacyOpen(true)} />

      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        t={t}
      />
    </div>
  );
}
