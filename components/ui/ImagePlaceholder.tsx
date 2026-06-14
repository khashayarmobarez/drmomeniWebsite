import type { CSSProperties } from 'react';

type ImagePlaceholderProps = {
  /** CSS aspect-ratio string, e.g. "4 / 5". Reserves space so real images cause no CLS. */
  ratio?: string;
  label: string;
  className?: string;
  /** "arch" gives a rounded-top portrait frame; "rect" a soft rectangle. */
  shape?: 'arch' | 'rect';
  /** tone of the frame relative to its background */
  tone?: 'light' | 'dark';
};

/**
 * Intentional, sized stand-in for photography added later. Reserves the correct
 * aspect-ratio and reads as a deliberate frame (hairline + label + mark), never
 * a broken image or zero-height box.
 */
export function ImagePlaceholder({
  ratio = '4 / 5',
  label,
  className = '',
  shape = 'rect',
  tone = 'light',
}: ImagePlaceholderProps) {
  const style: CSSProperties = { aspectRatio: ratio };

  const archRadius =
    shape === 'arch'
      ? 'rounded-[50vw_50vw_var(--r)_var(--r)/40%_40%_var(--r)_var(--r)]'
      : 'rounded-[1.25rem]';

  const toneClasses =
    tone === 'dark'
      ? 'bg-pine-soft/40 border-pine-line text-cream-soft'
      : 'bg-canvas-raised border-line text-ink-soft';

  return (
    // TODO: replace placeholder image
    <div
      role="img"
      aria-label={label}
      style={{ ...style, ['--r' as string]: '1.25rem' }}
      className={`relative flex flex-col items-center justify-center overflow-hidden border ${archRadius} ${toneClasses} ${className}`}
    >
      {/* faint diagonal hatch so the frame reads as intentional, not empty */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, currentColor 0 1px, transparent 1px 14px)',
          color:
            tone === 'dark' ? 'rgba(237,231,219,0.10)' : 'rgba(33,30,25,0.06)',
        }}
      />
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="mb-3 h-7 w-7 opacity-50"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <span className="px-4 text-center text-xs tracking-wide opacity-70">
        {label}
      </span>
    </div>
  );
}
