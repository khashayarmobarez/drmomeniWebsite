'use client';

import { motion, useReducedMotion, type Variants } from 'motion/react';
import { useTranslations } from 'next-intl';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';

export function Hero() {
  const t = useTranslations('home.hero');
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduce ? 0 : 0.09, delayChildren: 0.1 },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const portraitHidden = { opacity: 0, scale: reduce ? 1 : 0.94 };
  const portraitVisible = {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] as const },
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24">
      {/* atmosphere: soft warm wash + faint botanical glow, no flat fill */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-canvas-raised/60 via-canvas to-canvas" />
        <div className="absolute -top-24 end-[-10%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(28,58,49,0.10),transparent_62%)]" />
        <div className="absolute bottom-[-6rem] start-[-8%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(190,122,94,0.12),transparent_60%)]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"
      >
        {/* Copy */}
        <div className="max-w-xl">
          <motion.p
            variants={item}
            className="eyebrow flex items-center gap-3 text-bronze"
          >
            <span aria-hidden className="h-px w-8 bg-bronze/60" />
            {t('eyebrow')}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            {t('name')}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 text-xl font-medium text-pine sm:text-2xl"
          >
            {t('positioning')}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-md text-pretty text-base leading-relaxed text-ink-soft sm:text-lg"
          >
            {t('valueProp')}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-3.5"
          >
            <a
              href="#book"
              className="rounded-full bg-pine px-7 py-3.5 text-sm font-medium text-cream shadow-sm transition-[background-color,transform] duration-300 hover:bg-pine-soft active:scale-[0.98]"
            >
              {t('ctaPrimary')}
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3.5 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink/35 hover:bg-canvas-raised"
            >
              {t('ctaSecondary')}
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="h-4 w-4 transition-transform duration-300 rtl:-scale-x-100 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Portrait — animates independently so it never depends on stagger propagation */}
        <motion.div
          initial={portraitHidden}
          animate={portraitVisible}
          className="relative mx-auto w-full max-w-sm"
        >
          {/* offset bronze hairline frame for depth */}
          <div
            aria-hidden
            className="absolute inset-0 translate-x-3 translate-y-3 rounded-[50vw_50vw_1.25rem_1.25rem/40%_40%_1.25rem_1.25rem] border border-bronze/40 rtl:-translate-x-3"
          />
          <ImagePlaceholder
            ratio="4 / 5"
            shape="arch"
            label={t('portraitLabel')}
            className="relative shadow-[0_30px_60px_-30px_rgba(28,58,49,0.45)]"
          />
          {/* floating credential chip */}
          <div className="absolute -bottom-4 start-4 flex items-center gap-2 rounded-full border border-line bg-canvas/95 px-4 py-2 shadow-md backdrop-blur">
            <span aria-hidden className="h-2 w-2 rounded-full bg-blush" />
            <span className="text-xs font-medium text-ink">{t('badge')}</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
