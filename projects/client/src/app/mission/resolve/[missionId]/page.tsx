import { MissionDetailPage } from 'client/PageContainer';

import { useGetMissionDetail } from 'api/common';

import { Metadata } from 'next';

interface SolveProps {
  params: { missionId: string };
}

export const generateMetadata = async ({
  params: { missionId },
}: SolveProps): Promise<Metadata> => {
  return {
    title: { absolute: '문제 풀이' },
    description: 'StackKnowledge 문제 풀이 페이지입니다.',
    openGraph: {
      title: '문제 풀이',
      description: 'StackKnowledge 문제 풀이 페이지입니다.',
      url: `https://stack-knowledge-client.vercel.app/mission/resolve/${missionId}`,
    },
  };
};

export default function SolvePage({ params: { missionId } }: SolveProps) {
  return <MissionDetailPage missionId={missionId} />;
}
