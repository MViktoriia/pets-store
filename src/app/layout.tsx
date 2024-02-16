import React from 'react';
import { Crimson_Pro, Montserrat } from 'next/font/google';
import './globals.css';

const crimson_pro = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-crimson',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${crimson_pro.variable} ${montserrat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
