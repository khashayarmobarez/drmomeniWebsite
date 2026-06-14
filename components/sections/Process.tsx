import { useTranslations } from 'next-intl';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StaggerChildren, StaggerItem } from '@/components/motion/StaggerChildren';

type Step = { title: string; desc: string };

export function Process() {
  const t = useTranslations('home.process');
  const steps = t.raw('steps') as Step[];

  return (
    <section id="process" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow={t('eyebrow')} heading={t('heading')} />

        <StaggerChildren className="relative mt-14 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
          {/* connecting hairline across the row (lg) */}
          <span
            aria-hidden
            className="absolute top-6 hidden h-px w-full bg-gradient-to-r from-transparent via-line to-transparent lg:block"
          />
          {steps.map((step, i) => (
            <StaggerItem key={i} className="relative lg:pe-6">
              <div className="flex items-center gap-4 lg:block">
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-bronze/50 bg-canvas font-mono text-lg text-pine">
                  {i + 1}
                </span>
                <h3 className="text-lg font-semibold text-ink lg:mt-5">
                  {step.title}
                </h3>
              </div>
              <p className="mt-3 max-w-xs text-pretty text-[0.95rem] leading-relaxed text-ink-soft lg:mt-4">
                {step.desc}
              </p>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
