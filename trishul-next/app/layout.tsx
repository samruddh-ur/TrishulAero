import type { Metadata, Viewport } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SiteEffects from '@/components/SiteEffects';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Trishul Aero — Built to Own the Sky',
    template: '%s — Trishul Aero'
  },
  description:
    'Sovereign autonomous aerial platforms, counter-UAS systems, and mission intelligence — engineered in India for the next era of aerospace and defense.',
  metadataBase: new URL('https://trishulaero.com'),
  openGraph: {
    title: 'Trishul Aero — Built to Own the Sky',
    description:
      'Sovereign autonomous aerial platforms, counter-UAS systems, and mission intelligence — engineered in India.',
    type: 'website',
    siteName: 'Trishul Aero'
  },
  icons: { icon: [{ url: '/logo.png' }, { url: '/logo.svg' }] }
};

export const viewport: Viewport = {
  themeColor: '#07080a',
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="cursor-glow" />
        <Nav />
        {children}
        <Footer />
        <SiteEffects />
      </body>
    </html>
  );
}
