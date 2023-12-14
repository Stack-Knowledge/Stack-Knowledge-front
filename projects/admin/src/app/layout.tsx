import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { GlobalStyle } from 'common';
import { Header } from 'common';

import Providers from './providers';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stack Knowledge',
  description: 'Stack Knowledge',
};

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
