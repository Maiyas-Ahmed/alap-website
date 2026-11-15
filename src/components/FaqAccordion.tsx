import React, { useState } from 'react';
import type { SiteTranslations } from '../data/translations';
import { ChevronDownIcon } from './Icons';

interface FaqAccordionProps {
  t: SiteTranslations;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ t }) => {
  const [openId, setOpenId] = useState<string | null>(t.faq.items[0]?.id ?? null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-[#111B21] sm:text-3xl">
            {t.faq.heading}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600 sm:text-base">
            {t.faq.subheading}
          </p>
        </div>

        <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {t.faq.items.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `faq-panel-${item.id}`;
            const buttonId = `faq-btn-${item.id}`;

            return (
              <div key={item.id}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="flex min-h-[56px] w-full cursor-pointer items-center justify-between gap-4 px-6 py-4 text-left transition-colors duration-150 hover:bg-slate-50/70 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#008069]"
                  >
                    <span className="text-[15px] font-semibold text-[#111B21] sm:text-base">
                      {item.question}
                    </span>
                    <ChevronDownIcon
                      className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-150 ${
                        isOpen ? 'rotate-180 text-[#008069]' : ''
                      }`}
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-6 pb-5 pt-0.5 text-[15px] leading-relaxed text-slate-600"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
