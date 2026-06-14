import { useTranslations } from 'next-intl';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StaggerChildren, StaggerItem } from '@/components/motion/StaggerChildren';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';

type Treatment = { name: string; tag: string; desc: string };

export function FeaturedTreatments() {
  const t = useTranslations('home.treatments');
  const items = t.raw('items') as Treatment[];

  return (
    <section id="treatments" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t('eyebrow')}
          heading={t('heading')}
          intro={t('intro')}
        />

        <StaggerChildren className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <StaggerItem key={i} className="h-full">
              <article className="group flex h-full flex-col">
                <div className="relative overflow-hidden rounded-2xl">
                  <ImagePlaceholder
                    ratio="4 / 3"
                    shape="rect"
                    label={item.name}
                    className="transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute top-3 end-3 rounded-full bg-canvas/90 px-3 py-1 text-xs font-medium text-pine shadow-sm backdrop-blur">
                    {item.tag}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-ink">
                  {item.name}
                </h3>
                <p className="mt-2 text-pretty text-[0.95rem] leading-relaxed text-ink-soft">
                  {item.desc}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
