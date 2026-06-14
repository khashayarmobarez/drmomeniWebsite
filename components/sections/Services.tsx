import { useTranslations } from 'next-intl';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StaggerChildren, StaggerItem } from '@/components/motion/StaggerChildren';

type Pillar = { title: string; desc: string };

const icons = [
  // Hair
  <path key="h" d="M4 20c0-7 3-13 8-16M9 20c0-6 2-11 6-14M14 20c0-5 1-9 5-12" />,
  // Skin (leaf/droplet)
  <path key="s" d="M12 3c4 4 6 7 6 10a6 6 0 1 1-12 0c0-3 2-6 6-10ZM9 14c.5 1.6 1.6 2.7 3.2 3.2" />,
  // Beauty (sparkle)
  <path key="b" d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3ZM18 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" />,
];

export function Services() {
  const t = useTranslations('home.services');
  const items = t.raw('items') as Pillar[];

  return (
    <section id="services" className="scroll-mt-24 bg-canvas-raised/55 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t('eyebrow')}
          heading={t('heading')}
          intro={t('intro')}
        />

        <StaggerChildren className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <StaggerItem key={i}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-line bg-canvas p-7 transition-[transform,box-shadow,border-color] duration-400 hover:-translate-y-1 hover:border-bronze/40 hover:shadow-[0_24px_50px_-32px_rgba(28,58,49,0.5)]">
                {/* top hairline accent grows on hover */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-0.5 origin-center scale-x-0 bg-gradient-to-r from-transparent via-bronze to-transparent transition-transform duration-500 group-hover:scale-x-100"
                />
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pine/8 text-pine transition-colors duration-400 group-hover:bg-pine group-hover:text-cream">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {icons[i]}
                    </svg>
                  </span>
                  <span className="font-mono text-sm text-bronze/70">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-pretty text-[0.975rem] leading-relaxed text-ink-soft">
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
