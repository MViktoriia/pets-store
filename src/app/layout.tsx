import React from 'react';
import { Cormorant, Crimson_Pro, Montserrat, Inter } from 'next/font/google';
import './globals.css';
import HeaderSection from './components/Header/headerSection';
import SideContactPanel from './components/SideContactsPanel/side-contact-panel';
import Footer from './components/Footer/footer';

const cormorant = Cormorant({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat',
  display: 'swap',
});

const crimson = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-crimson',
  display: 'swap',
});

const inter = Inter({
  subsets: ['cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable} ${crimson.variable} ${inter.variable}`}
    >
      <body>
        <HeaderSection />
        <SideContactPanel />
        {children}
        <Footer />
      </body>
    </html>
  );
}
