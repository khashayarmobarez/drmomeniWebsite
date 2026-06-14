import { useTranslations } from 'next-intl';

const navKeys = ['about', 'services', 'treatments', 'process', 'faq'] as const;
type Social = { label: string; handle: string };

export function Footer() {
  const t = useTranslations('home');
  const socials = t.raw('footer.socials') as Social[];
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-pine-line bg-pine text-cream-soft">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <p className="text-xl font-semibold text-cream">
              <span className="text-blush">Dr.</span> Hilda Momeni
            </p>
            <p className="mt-4 text-pretty text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label={t('footer.navTitle')}>
            <h2 className="eyebrow text-bronze">{t('footer.navTitle')}</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {navKeys.map((key) => (
                <li key={key}>
                  <a
                    href={`#${key}`}
                    className="transition-colors hover:text-cream"
                  >
                    {t(`nav.links.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div>
            <h2 className="eyebrow text-bronze">{t('footer.socialTitle')}</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {socials.map((s) => (
                <li key={s.handle}>
                  <a
                    href="#"
                    className="group inline-flex items-center gap-2 transition-colors hover:text-cream"
                  >
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 rounded-full bg-bronze/70 transition-transform duration-300 group-hover:scale-150"
                    />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Medical disclaimer */}
        <div className="mt-14 rounded-xl border border-pine-line bg-pine-soft/30 p-5">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-cream">
            {t('footer.disclaimerTitle')}
          </h2>
          <p className="mt-2 text-pretty text-xs leading-relaxed text-cream-soft">
            {t('footer.disclaimer')}
          </p>
        </div>

        <div className="mt-10 border-t border-pine-line pt-6 text-xs text-cream-soft/80">
          {t('footer.copyright', { year })}
        </div>
      </div>
    </footer>
  );
}
