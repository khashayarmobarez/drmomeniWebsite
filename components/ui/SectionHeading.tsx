import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';

type SectionHeadingProps = {
  eyebrow: string;
  heading: string;
  intro?: string;
  align?: 'start' | 'center';
  tone?: 'dark' | 'light';
};

/** Eyebrow + heading + optional intro, revealed on scroll. Shared across sections. */
export function SectionHeading({
  eyebrow,
  heading,
  intro,
  align = 'start',
  tone = 'dark',
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  const headingColor = tone === 'light' ? 'text-cream' : 'text-ink';
  const introColor = tone === 'light' ? 'text-cream-soft' : 'text-ink-soft';

  return (
    <FadeInOnScroll
      className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : 'text-start'}`}
    >
      <p
        className={`eyebrow flex items-center gap-3 text-bronze ${
          isCenter ? 'justify-center' : ''
        }`}
      >
        <span aria-hidden className="h-px w-8 bg-bronze/60" />
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem] ${headingColor}`}
      >
        {heading}
      </h2>
      {intro && (
        <p className={`mt-4 text-pretty text-base leading-relaxed sm:text-lg ${introColor}`}>
          {intro}
        </p>
      )}
    </FadeInOnScroll>
  );
}
