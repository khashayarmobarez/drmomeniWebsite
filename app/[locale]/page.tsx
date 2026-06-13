import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('home');
  return (
    <main className="flex flex-1 flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold">{t('title')}</h1>
      <p className="mt-4 text-lg text-gray-600">{t('description')}</p>
    </main>
  );
}
