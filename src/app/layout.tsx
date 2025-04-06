import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nathauric | Auriculothérapie à Aulnay-sous-Bois',
  description:
    'Découvrez Nathauric, votre experte en auriculothérapie à Aulnay-sous-Bois. Soulagement des douleurs, stress, troubles du sommeil et accompagnement bien-être personnalisé.',
  keywords: [
    'auriculothérapie',
    'Aulnay-sous-Bois',
    'stress',
    'arrêt du tabac',
    'troubles du sommeil',
    'bien-être',
    'Nathauric',
    'Nataly Gonçalves',
  ],
  metadataBase: new URL('https://www.nathauric.com'),
  openGraph: {
    title: 'Nathauric - Auriculothérapie à Aulnay-sous-Bois',
    description:
      'Séances personnalisées d’auriculothérapie à Aulnay-sous-Bois avec Nataly Gonçalves. Bien-être physique et émotionnel grâce à une approche naturelle et douce.',
    url: 'https://www.nathauric.com',
    siteName: 'Nathauric',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
