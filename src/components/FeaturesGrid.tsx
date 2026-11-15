import React from 'react';
import type { SiteTranslations } from '../data/translations';
import { FeatureIconById } from './Icons';

interface FeaturesGridProps {
  t: SiteTranslations;
}

export const FeaturesGrid: React.FC<FeaturesGridProps> = ({ t }) => {
  return (
    <section id="features" className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-[#111B21] sm:text-3xl">
            {t.features.heading}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600 sm:text-base">
            {t.features.subheading}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.features.items.map((feature) => (
            <article
              key={feature.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-colors duration-150 hover:border-[#008069]/40"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#008069]/10 text-[#008069]">
                    <FeatureIconById id={feature.id} className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs font-medium tabular-nums text-slate-400">
                    {feature.num}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold tracking-tight text-[#111B21]">
                  {feature.title}
                </h3>

                <p className="mt-2.5 text-[15px] leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
