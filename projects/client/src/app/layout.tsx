import type { Metadata } from 'next';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { GlobalStyle } from 'common';
import { Header } from 'common';

import Script from 'next/script';

import * as gtag from 'client/libs/gtag';

import Providers from './providers';

export const metadata: Metadata = {
  applicationName: 'StackKnowledge',
  keywords: [
    'Stack Knowledge',
    'Stack',
    'Knowledge',
    '광주소프트웨어마이스터고등학교',
    '광주소프트웨어마이스터고',
    '광소마',
    '광주',
    '소프트웨어',
    '마이스터고',
    '마이스터고등학교',
    'GSM',
    'GwangjuSoftwareMeisterHighSchool',
    'SoftWare',
    '학습',
  ],
  creator: 'StackKnowledge',
  publisher: 'StackKnowledge',
  description: '학습 장려 게임화 플랫폼입니다.',
  title: {
    template: 'StackKnowledge - %s',
    default: 'StackKnowledge',
  },
  openGraph: {
    title: 'StackKnowledge',
    description: '학습 장려 게임화 플랫폼입니다.',
    url: 'https://stackknowledge.vercel.app/',
    siteName: 'StackKnowledge',
    images: [
      {
        url: '/favicon.png',
        width: 800,
        height: 800,
      },
    ],
    locale: 'ko',
    type: 'website',
  },
  icons: {
    icon: '/favicon.png',
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Script
          id='gtag-init'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtag.GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
      </head>
      <body>
        <Providers>
          <ReactQueryDevtools />
          <GlobalStyle />
          <Header role='client' />
          {children}
        </Providers>
      </body>
    </html>
  );
}
