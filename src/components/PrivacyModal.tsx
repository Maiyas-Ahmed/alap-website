import React, { useEffect } from 'react';
import type { SiteTranslations } from '../data/translations';
import { CloseIcon } from './Icons';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: SiteTranslations;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose, t }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#111B21]/45 p-4 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8"
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h2
              id="privacy-modal-title"
              className="text-xl font-bold tracking-tight text-[#111B21]"
            >
              {t.privacyModal.title}
            </h2>
            <p className="mt-1 font-mono text-xs text-slate-500">
              {t.privacyModal.subtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.privacyModal.closeLabel}
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50 hover:text-[#111B21] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008069]"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 space-y-5">
          {t.privacyModal.sections.map((section) => (
            <section key={section.heading}>
              <h3 className="text-sm font-semibold text-[#111B21]">
                {section.heading}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                {section.body}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-8 flex justify-end border-t border-slate-200 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="min-h-[40px] cursor-pointer rounded-xl bg-[#008069] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#006b57] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008069]"
          >
            {t.privacyModal.closeLabel}
          </button>
        </div>
      </div>
    </div>
  );
};
