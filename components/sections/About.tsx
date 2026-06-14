import { useTranslations } from 'next-intl';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';

export function About() {
  const t = useTranslations('home.about');
  const points = t.raw('points') as string[];

  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Portrait */}
        <FadeInOnScroll y={24} className="relative order-1 mx-auto w-full max-w-sm lg:order-none">
          <div
            aria-hidden
            className="absolute -inset-3 -z-10 rounded-[1.75rem] bg-canvas-raised"
          />
          <ImagePlaceholder
            ratio="3 / 4"
            shape="rect"
            label={t('portraitLabel')}
          />
        </FadeInOnScroll>

        {/* Copy */}
        <div>
          <FadeInOnScroll>
            <p className="eyebrow flex items-center gap-3 text-bronze">
              <span aria-hidden className="h-px w-8 bg-bronze/60" />
              {t('eyebrow')}
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              {t('heading')}
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
              {t('body')}
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.05}>
            <blockquote className="mt-7 border-s-2 border-blush ps-5 text-lg italic leading-relaxed text-pine">
              {t('philosophy')}
            </blockquote>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.1}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-1">
              {points.map((point, i) => (
                <li key={i} className="flex items-center gap-3 text-ink">
                  <span
                    aria-hidden
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pine/10 text-pine"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-[0.975rem]">{point}</span>
                </li>
              ))}
            </ul>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
