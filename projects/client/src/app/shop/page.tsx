import { ShopPage } from 'client/PageContainer';

import { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'StackKnowledge 상점 페이지입니다.',
  title: { absolute: '상점' },
  openGraph: {
    title: '상점',
    description: 'StackKnowledge 상점 페이지입니다.',
    url: 'https://stackknowledge.vercel.app/shop/',
  },
};

export default function Shop() {
  return <ShopPage />;
}
