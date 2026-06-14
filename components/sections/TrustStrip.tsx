import { useTranslations } from 'next-intl';
import { StaggerChildren, StaggerItem } from '@/components/motion/StaggerChildren';

type Stat = { value: string; label: string };

export function TrustStrip() {
  const t = useTranslations('home.trust');
  const items = t.raw('items') as Stat[];

  return (
    <section className="bg-pine text-cream">
      <StaggerChildren
        className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-5 py-14 sm:px-8 lg:grid-cols-4 lg:py-16"
        stagger={0.08}
      >
        {items.map((stat, i) => (
          <StaggerItem
            key={i}
            className={`flex flex-col items-center text-center lg:px-6 ${
              i > 0 ? 'lg:border-s lg:border-pine-line' : ''
            }`}
          >
            <span className="text-4xl font-bold tracking-tight text-cream sm:text-5xl">
              {stat.value}
            </span>
            <span className="mt-2 max-w-[12ch] text-sm text-cream-soft">
              {stat.label}
            </span>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </section>
  );
}
