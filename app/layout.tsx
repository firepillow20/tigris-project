import React from 'react';
import { Rubik } from '@next/font/google';
import './globals.css';

const rubik = Rubik();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={rubik.className}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Neverenders Database</title>
        <meta name="description" content="Neverenders official database" />
      </head>
      <body>{children}</body>
    </html>
  );
}
