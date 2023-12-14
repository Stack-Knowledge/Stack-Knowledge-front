import { RankingPage } from 'client/PageContainer';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'StackKnowledge 랭킹 페이지입니다.',
  title: { absolute: '랭킹' },
  openGraph: {
    title: '랭킹',
    description: 'StackKnowledge 랭킹 페이지입니다.',
    url: 'https://stackknowledge.vercel.app/ranking/',
  },
};

export default function Ranking() {
  return <RankingPage />;
}
