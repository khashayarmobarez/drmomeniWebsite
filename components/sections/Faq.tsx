'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { SectionHeading } from '@/components/ui/SectionHeading';

type Item = { q: string; a: string };

export function Faq() {
  const t = useTranslations('home.faq');
  const items = t.raw('items') as Item[];
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading eyebrow={t('eyebrow')} heading={t('heading')} align="center" />

        <ul className="mt-12 divide-y divide-line border-y border-line">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={i}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-trigger-${i}`}
                    className="flex w-full items-center justify-between gap-4 py-5 text-start transition-colors hover:text-pine"
                  >
                    <span className="text-base font-medium text-ink sm:text-lg">
                      {item.q}
                    </span>
                    <span
                      aria-hidden
                      className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line transition-colors duration-300 ${
                        isOpen ? 'border-pine bg-pine text-cream' : 'text-pine'
                      }`}
                    >
                      <span className="absolute h-3 w-px bg-current transition-transform duration-300" style={{ transform: isOpen ? 'scaleY(0)' : 'scaleY(1)' }} />
                      <span className="absolute h-px w-3 bg-current" />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${i}`}
                      initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      animate={reduce ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                      exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pe-12 text-pretty text-[0.975rem] leading-relaxed text-ink-soft">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
