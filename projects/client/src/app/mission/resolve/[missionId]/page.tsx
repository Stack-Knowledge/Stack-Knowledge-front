import { MissionDetailPage } from 'client/PageContainer';

import type { Metadata } from 'next';

interface SolveProps {
  params: { missionId: string };
}

export const generateMetadata = async ({
  params: { missionId },
}: SolveProps): Promise<Metadata> => ({
  title: { absolute: '문제 풀이' },
  description: 'StackKnowledge 문제 풀이 페이지입니다.',
  openGraph: {
    title: '문제 풀이',
    description: 'StackKnowledge 문제 풀이 페이지입니다.',
    url: `https://stackknowledge.vercel.app/mission/resolve/${missionId}`,
  },
});

export default function SolvePage({ params: { missionId } }: SolveProps) {
  return <MissionDetailPage missionId={missionId} />;
}
