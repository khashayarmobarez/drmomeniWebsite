import { useTranslations } from 'next-intl';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StaggerChildren, StaggerItem } from '@/components/motion/StaggerChildren';

type Testimonial = { quote: string; name: string; note: string };

export function Testimonials() {
  const t = useTranslations('home.testimonials');
  // TODO: replace placeholder testimonials with real, consented patient quotes
  const items = t.raw('items') as Testimonial[];

  return (
    <section className="bg-canvas-raised/55 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t('eyebrow')}
          heading={t('heading')}
          align="center"
        />

        <StaggerChildren className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <StaggerItem key={i} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl border border-line bg-canvas p-7">
                <span
                  aria-hidden
                  className="font-mono text-5xl leading-none text-blush/60"
                >
                  &ldquo;
                </span>
                <blockquote className="mt-2 flex-1 text-pretty text-[1.05rem] leading-relaxed text-ink">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span
                    aria-hidden
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-pine/10 text-sm font-semibold text-pine"
                  >
                    {item.name.charAt(0)}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-medium text-ink">
                      {item.name}
                    </span>
                    <span className="text-xs text-ink-soft">{item.note}</span>
                  </span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
