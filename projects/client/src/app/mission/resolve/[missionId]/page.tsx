import { MissionDetailPage } from 'client/PageContainer';

import { useGetMissionDetail } from 'api/common';

import { Metadata } from 'next';

interface SolveProps {
  params: { missionId: string };
}

export const generateMetadata = async ({
  params: { missionId },
}: SolveProps): Promise<Metadata> => {
  const { data } = await useGetMissionDetail(missionId);

  return {
    title: { absolute: data?.title ?? '' },
    description: data?.content,
    openGraph: {
      title: data?.title,
      description: data?.content,
      url: `https://stack-knowledge-client.vercel.app/mission/resolve/${missionId}`,
    },
  };
};

export default function SolvePage({ params: { missionId } }: SolveProps) {
  return <MissionDetailPage missionId={missionId} />;
}
