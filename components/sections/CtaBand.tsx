import { useTranslations } from 'next-intl';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';

export function CtaBand() {
  const t = useTranslations('home.cta');

  return (
    <section id="book" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24">
      <FadeInOnScroll
        y={24}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-pine px-6 py-16 text-center text-cream sm:px-12 sm:py-20"
      >
        {/* atmosphere */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 start-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(190,122,94,0.28),transparent_65%)]" />
          <div className="absolute inset-x-8 bottom-6 h-px bg-gradient-to-r from-transparent via-bronze/40 to-transparent" />
        </div>

        <div className="relative">
          <p className="eyebrow flex items-center justify-center gap-3 text-blush-soft">
            <span aria-hidden className="h-px w-8 bg-blush-soft/50" />
            {t('eyebrow')}
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {t('heading')}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-cream-soft sm:text-lg">
            {t('body')}
          </p>
          <a
            href="#book"
            className="mt-9 inline-block rounded-full bg-cream px-8 py-4 text-sm font-semibold text-pine shadow-lg transition-[background-color,transform] duration-300 hover:bg-white active:scale-[0.98]"
          >
            {t('button')}
          </a>
        </div>
      </FadeInOnScroll>
    </section>
  );
}
