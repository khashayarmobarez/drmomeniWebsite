import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Nav } from '@/components/sections/Nav';
import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { FeaturedTreatments } from '@/components/sections/FeaturedTreatments';
import { BeforeAfter } from '@/components/sections/BeforeAfter';
import { Process } from '@/components/sections/Process';
import { Testimonials } from '@/components/sections/Testimonials';
import { Faq } from '@/components/sections/Faq';
import { CtaBand } from '@/components/sections/CtaBand';
import { Footer } from '@/components/sections/Footer';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home.meta' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <FeaturedTreatments />
        <BeforeAfter />
        <Process />
        <Testimonials />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
