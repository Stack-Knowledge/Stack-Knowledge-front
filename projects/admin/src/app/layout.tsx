'use client';

// import type { Metadata } from 'next';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { GlobalStyle } from 'common';
import { Header } from 'common';

import Providers from './providers';

// export const metadata: Metadata = {
//   title: 'Stack Knowledge',
//   description: '공부해라 ㅋ',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body>
        <Providers>
          <ReactQueryDevtools />
          <GlobalStyle />
          <Header role='admin' />
          {children}
        </Providers>
      </body>
    </html>
  );
}
