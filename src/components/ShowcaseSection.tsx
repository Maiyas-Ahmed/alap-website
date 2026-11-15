import React, { useState } from 'react';
import deviceShowcaseImg from '../assets/images/alap_device_showcase_1794746097642.jpg';
import type { SiteTranslations } from '../data/translations';

interface ShowcaseSectionProps {
  t: SiteTranslations;
}

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({ t }) => {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section className="border-b border-slate-200 bg-slate-50/40 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-bold tracking-tight text-[#111B21] sm:text-3xl">
              {t.showcase.heading}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600 sm:text-base">
              {t.showcase.subheading}
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              {!imageFailed ? (
                <img
                  src={deviceShowcaseImg}
                  alt={t.showcase.imageAlt}
                  referrerPolicy="no-referrer"
                  onError={() => setImageFailed(true)}
                  className="aspect-[4/3] w-full object-cover"
                />
              ) : (
                <div className="flex aspect-[4/3] w-full flex-col items-center justify-center bg-slate-50 p-8 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#008069] text-lg font-bold text-white">
                    A
                  </div>
                  <p className="mt-3 text-sm font-medium text-[#111B21]">
                    {t.showcase.imageAlt}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 4-column tabular proof strip below the split */}
        <dl className="mt-10 grid grid-cols-1 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {t.showcase.pillars.map((pillar) => (
            <div key={pillar.label} className="px-6 py-5">
              <dt className="text-xs font-medium text-slate-500">{pillar.label}</dt>
              <dd className="mt-1.5 text-sm font-semibold text-[#111B21]">
                {pillar.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
