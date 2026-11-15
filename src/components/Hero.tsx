import React from 'react';
import type { Language, SiteTranslations } from '../data/translations';
import {
  ALAP_PACKAGE_ID,
  UPDATES_SITE_URL,
  GITHUB_LATEST_APK_URL,
  formatReleaseDate,
  toLocalizedDigits,
  type ReleaseFetchResult,
} from '../utils/release';
import { DownloadArrowIcon, ExternalArrowIcon } from './Icons';

interface HeroProps {
  lang: Language;
  t: SiteTranslations;
  releaseState: ReleaseFetchResult;
  isLoading: boolean;
  onRetry: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  t,
  releaseState,
  isLoading,
  onRetry,
}) => {
  const { release, status } = releaseState;

  const statusText = isLoading
    ? t.hero.checkingRelease
    : status === 'live'
      ? t.hero.liveStatus
      : status === 'cached'
        ? t.hero.cachedStatus
        : t.hero.offlineStatus;

  return (
    <section
      id="top"
      className="border-b border-slate-200 bg-white pt-10 pb-14 sm:pt-14 sm:pb-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Core Proposition & Primary Actions */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <p className="font-mono text-xs font-medium tracking-tight text-slate-500">
              {t.hero.kicker}
            </p>

            <h1 className="mt-4 max-w-2xl text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.12] font-bold tracking-tight text-[#111B21]">
              {t.hero.headline}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {t.hero.subheadline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href={GITHUB_LATEST_APK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center gap-2.5 rounded-xl bg-[#008069] px-6 py-3 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#006b57] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008069]"
              >
                <DownloadArrowIcon className="h-4 w-4 shrink-0" />
                <span>{t.hero.downloadBtn}</span>
              </a>

              <a
                href="#features"
                className="inline-flex min-h-[46px] items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#111B21] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008069]"
              >
                {t.hero.viewFeaturesBtn}
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              {t.hero.directNotice}
            </p>
          </div>

          {/* Right Column: Live Release Download Card */}
          <div className="flex flex-col justify-center lg:col-span-5">
            <div
              data-testid="release-card"
              className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <span className="text-sm font-semibold text-[#111B21]">
                    {release?.appName ?? t.brandName} APK
                  </span>
                  <span className="text-xs font-medium text-[#008069]">
                    {statusText}
                  </span>
                </div>

                {isLoading && !release ? (
                  <div className="space-y-4 py-6" aria-live="polite">
                    <div className="h-7 w-36 rounded-md bg-slate-100" />
                    <div className="h-4 w-52 rounded-md bg-slate-100" />
                    <div className="h-20 w-full rounded-lg bg-slate-50" />
                  </div>
                ) : release ? (
                  <div className="mt-5">
                    {/* Metadata Grid */}
                    <dl className="grid grid-cols-3 gap-4 border-b border-slate-100 pb-5">
                      <div>
                        <dt className="text-xs text-slate-500">{t.hero.versionLabel}</dt>
                        <dd className="mt-1 font-mono text-lg font-bold tabular-nums text-[#111B21]">
                          v{toLocalizedDigits(release.latestVersionName, lang)}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs text-slate-500">{t.hero.buildLabel}</dt>
                        <dd className="mt-1 font-mono text-lg font-bold tabular-nums text-[#111B21]">
                          #{toLocalizedDigits(release.latestVersionCode, lang)}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs text-slate-500">{t.hero.releasedLabel}</dt>
                        <dd className="mt-1 text-sm font-semibold tabular-nums text-[#111B21]">
                          {formatReleaseDate(release.releaseDate, lang)}
                        </dd>
                      </div>
                    </dl>

                    {/* Package ID row */}
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                      <span>{t.hero.packageLabel}</span>
                      <span className="font-mono text-[#111B21]">
                        {release.packageId || ALAP_PACKAGE_ID}
                      </span>
                    </div>

                    {/* Changelog */}
                    <div className="mt-5 border-t border-slate-100 pt-4">
                      <h2 className="text-xs font-semibold text-slate-700">
                        {t.hero.changelogTitle}
                      </h2>
                      {release.changelog.length > 0 ? (
                        <ul className="mt-2.5 space-y-2 text-sm leading-relaxed text-slate-600">
                          {release.changelog.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span
                                aria-hidden="true"
                                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#008069]"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mt-2 text-sm text-slate-600">
                          {t.hero.emptyChangelog}
                        </p>
                      )}
                    </div>
                  </div>
                ) : (
                  /* Offline / Unavailable Fallback State */
                  <div className="py-5">
                    <p className="text-sm leading-relaxed text-slate-600">
                      {t.hero.offlineDescription}
                    </p>
                    <p className="mt-3 font-mono text-xs text-slate-500">
                      {ALAP_PACKAGE_ID}
                    </p>
                    <button
                      type="button"
                      onClick={onRetry}
                      className="mt-4 inline-flex min-h-[38px] cursor-pointer items-center justify-center rounded-lg border border-slate-200 px-3.5 py-1.5 text-xs font-semibold text-[#111B21] transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008069]"
                    >
                      {t.hero.retryBtn}
                    </button>
                  </div>
                )}
              </div>

              {/* Card Bottom Primary Download & Fallback Mirror Link */}
              <div className="mt-6 border-t border-slate-100 pt-5">
                <div className="flex flex-col gap-2.5">
                  <a
                    href={GITHUB_LATEST_APK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-[#008069] px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap transition-colors duration-150 hover:bg-[#006b57] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008069]"
                  >
                    <DownloadArrowIcon className="h-4 w-4 shrink-0" />
                    <span>
                      {t.hero.downloadBtn} {release ? `(v${toLocalizedDigits(release.latestVersionName, lang)})` : ''}
                    </span>
                  </a>
                  <a
                    href={UPDATES_SITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-1 text-xs font-medium text-slate-500 hover:text-[#008069] transition-colors"
                  >
                    <span>{t.hero.fallbackBtn}</span>
                    <ExternalArrowIcon className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
