import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// Locale-aware navigation primitives. Link/useRouter/usePathname preserve the
// active locale automatically; pass { locale } to switch languages.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
