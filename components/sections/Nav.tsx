'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { LanguageSwitcher } from './LanguageSwitcher';

const sectionLinks = [
  { key: 'about', href: '#about' },
  { key: 'services', href: '#services' },
  { key: 'treatments', href: '#treatments' },
  { key: 'process', href: '#process' },
  { key: 'faq', href: '#faq' },
] as const;

export function Nav() {
  const t = useTranslations('home.nav');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500 ${
        scrolled || open
          ? 'border-b border-line bg-canvas/85 shadow-[0_1px_0_rgba(33,30,25,0.04)] backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-pine focus:px-4 focus:py-2 focus:text-sm focus:text-cream"
      >
        {t('skip')}
      </a>

      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8 lg:h-[4.5rem]">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-baseline gap-2 text-ink"
          aria-label="Dr. Hilda Momeni"
        >
          <span className="text-lg font-semibold tracking-tight">
            <span className="text-pine">Dr.</span> Hilda Momeni
          </span>
          <span
            aria-hidden
            className="hidden h-1.5 w-1.5 rounded-full bg-blush transition-transform duration-500 group-hover:scale-125 sm:block"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 text-sm text-ink-soft lg:flex">
          {sectionLinks.map((l) => (
            <li key={l.key}>
              <a
                href={l.href}
                className="relative py-1 transition-colors hover:text-ink after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-center after:scale-x-0 after:bg-bronze after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {t(`links.${l.key}`)}
              </a>
            </li>
          ))}
        </ul>

        {/* Right cluster */}
        <div className="flex items-center gap-3 sm:gap-5">
          <div className="hidden sm:block">
            <LanguageSwitcher tone="dark" />
          </div>
          <a
            href="#book"
            className="hidden rounded-full bg-pine px-5 py-2.5 text-sm font-medium text-cream shadow-sm transition-[background-color,transform] duration-300 hover:bg-pine-soft active:scale-[0.98] sm:inline-block"
          >
            {t('book')}
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={t('menu')}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute inset-x-0 top-0 h-px bg-current transition-transform duration-300 ${
                  open ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-current transition-opacity duration-200 ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute inset-x-0 bottom-0 h-px bg-current transition-transform duration-300 ${
                  open ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-line bg-canvas/95 backdrop-blur-md transition-[max-height,opacity] duration-400 lg:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4 text-ink">
          {sectionLinks.map((l) => (
            <li key={l.key}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-base transition-colors hover:bg-canvas-raised"
              >
                {t(`links.${l.key}`)}
              </a>
            </li>
          ))}
          <li className="mt-2 flex items-center justify-between gap-4 px-3 pt-3">
            <LanguageSwitcher tone="dark" />
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="rounded-full bg-pine px-5 py-2.5 text-sm font-medium text-cream"
            >
              {t('book')}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
