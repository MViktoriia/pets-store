import React from 'react';
import { Cormorant, Crimson_Pro, Montserrat } from 'next/font/google';
import './globals.css';
import Header from './components/Header/header';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
