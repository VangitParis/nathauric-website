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
  title: 'Auriculothérapie à Aulnay-sous-Bois | Nathauric by Nataly Gonçalves',
  description: 'Libérez-vous du stress, de la douleur ou du tabac grâce à l’auriculothérapie à Aulnay-sous-Bois. Consultations avec Nataly Gonçalves.',
  keywords: [
    'auriculothérapie',
    'Aulnay-sous-Bois',
    'arrêt tabac',
    'stress',
    'anxiété',
    'sommeil',
    'douleur chronique',
    'médecine douce',
    '93',
    'Nathauric',
    'Nataly Gonçalves'
  ],
  metadataBase: new URL('https://www.nathauric.com'),
  openGraph: {
    title: 'Auriculothérapie à Aulnay-sous-Bois | Nathauric',
    description: 'Prenez rendez-vous avec Nathauric, praticienne en auriculothérapie certifiée à Aulnay-sous-Bois. Soin naturel, écoute bienveillante et efficacité.',
    type: 'website',
    url: 'https://www.nathauric.com',
    siteName: 'Nathauric',
    locale: 'fr_FR',
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
