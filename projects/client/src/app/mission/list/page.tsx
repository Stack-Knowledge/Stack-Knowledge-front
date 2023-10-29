import { MissionListPage } from 'client/PageContainer';

import { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'StackKnowledge 문제 목록 페이지입니다.',
  title: { absolute: '문제 목록' },
  openGraph: {
    title: '문제 목록',
    description: 'StackKnowledge 문제 목록 페이지입니다.',
    url: 'https://stackknowledge.vercel.app/mission/list/',
  },
};

export default function MissionDetail() {
  return <MissionListPage />;
}
