import React from 'react';
import type { SiteTranslations } from '../data/translations';
import { CheckShieldIcon } from './Icons';

interface InstallGuideProps {
  t: SiteTranslations;
}

export const InstallGuide: React.FC<InstallGuideProps> = ({ t }) => {
  return (
    <section
      id="install-guide"
      className="border-b border-slate-200 bg-slate-50/40 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-[#111B21] sm:text-3xl">
            {t.install.heading}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600 sm:text-base">
            {t.install.subheading}
          </p>
        </div>

        {/* 3-Step Installation & Update Grid */}
        <ol className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {t.install.steps.map((step) => (
            <li
              key={step.step}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <span className="font-mono text-xs font-semibold text-[#008069]">
                {step.step}
              </span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-[#111B21]">
                {step.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-slate-600">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        {/* Update Preservation Note */}
        <div className="mt-8 flex items-start gap-4 rounded-2xl border border-[#008069]/25 bg-[#008069]/[0.04] p-6">
          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#008069] text-white">
            <CheckShieldIcon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-[#111B21]">
              {t.install.preserveCalloutTitle}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
              {t.install.preserveCalloutBody}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
