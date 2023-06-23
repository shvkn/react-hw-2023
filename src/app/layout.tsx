import React from 'react';
import { Roboto } from 'next/font/google';

import './globals.css';
import { StoreProvider } from '@/services/store-provider';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import classNames from 'classnames';
import localFont from 'next/font/local';

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
});

const sfProText = localFont({
  src: [
    {
      path: '../fonts/SFProText-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/SFProText-RegularItalic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/SFProText-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/SFProText-Semibold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-sf-pro-text',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={classNames(roboto.variable, sfProText.variable)}>
      <body className={'ololo'}>
        <StoreProvider>
          <Header />
          {children}
          <Footer />
          <div id='dropdown'></div>
        </StoreProvider>
      </body>
    </html>
  );
}
