import { useTranslations } from 'next-intl';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';

export function BeforeAfter() {
  const t = useTranslations('home.beforeAfter');

  return (
    <section className="bg-canvas-raised/55 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t('eyebrow')}
          heading={t('heading')}
          intro={t('intro')}
          align="center"
        />

        <FadeInOnScroll y={24} className="mt-12">
          {/* TODO: replace placeholder image — static before/after teaser, no link target yet */}
          <div
            role="img"
            aria-label={`${t('beforeLabel')} / ${t('afterLabel')}`}
            className="relative grid grid-cols-2 overflow-hidden rounded-[1.5rem] border border-line shadow-[0_30px_70px_-40px_rgba(28,58,49,0.5)]"
            style={{ aspectRatio: '16 / 10' }}
          >
            {/* before half */}
            <div className="relative flex items-end bg-canvas-raised p-5">
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.4]"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(135deg, rgba(33,30,25,0.06) 0 1px, transparent 1px 14px)',
                }}
              />
              <span className="relative rounded-full bg-canvas/85 px-3 py-1 text-xs font-medium text-ink-soft shadow-sm">
                {t('beforeLabel')}
              </span>
            </div>

            {/* after half */}
            <div className="relative flex items-end justify-end bg-canvas p-5">
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.5]"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(135deg, rgba(190,122,94,0.10) 0 1px, transparent 1px 14px)',
                }}
              />
              <span className="relative rounded-full bg-pine px-3 py-1 text-xs font-medium text-cream shadow-sm">
                {t('afterLabel')}
              </span>
            </div>

            {/* center divider + knob */}
            <div
              aria-hidden
              className="absolute inset-y-0 start-1/2 w-px -translate-x-1/2 bg-bronze/70 rtl:translate-x-1/2"
            >
              <span className="absolute top-1/2 start-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-bronze/60 bg-canvas/95 shadow-md rtl:translate-x-1/2">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-bronze"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 7l-4 5 4 5M16 7l4 5-4 5" />
                </svg>
              </span>
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-ink-soft/80">{t('note')}</p>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
