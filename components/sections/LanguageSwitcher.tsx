'use client';

import { useTransition } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

const locales = ['fa', 'en'] as const;

/**
 * FA/EN toggle. Re-renders the current path under the chosen locale via
 * next-intl navigation, so the active route (and RTL/LTR direction) is preserved.
 */
export function LanguageSwitcher({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const t = useTranslations('home.lang');
  const active = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const idle = tone === 'light' ? 'text-cream-soft hover:text-cream' : 'text-ink-soft hover:text-ink';
  const current = tone === 'light' ? 'text-cream' : 'text-ink';
  const divider = tone === 'light' ? 'bg-cream-soft/40' : 'bg-line';

  return (
    <div
      className="flex items-center gap-1.5 text-sm font-medium"
      role="group"
      aria-label={t('label')}
    >
      {locales.map((loc, i) => (
        <span key={loc} className="flex items-center gap-1.5">
          {i > 0 && <span className={`h-3 w-px ${divider}`} aria-hidden />}
          <button
            type="button"
            lang={loc}
            disabled={loc === active || isPending}
            aria-current={loc === active ? 'true' : undefined}
            onClick={() =>
              startTransition(() => router.replace(pathname, { locale: loc }))
            }
            className={`rounded-sm px-1 transition-colors disabled:cursor-default ${
              loc === active ? current : idle
            }`}
          >
            {t(loc)}
          </button>
        </span>
      ))}
    </div>
  );
}
