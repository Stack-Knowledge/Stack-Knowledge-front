import { MissionDetailPage } from 'client/PageContainer';

interface SolveProps {
  params: { missionId: string };
}

export default function SolvePage({ params: { missionId } }: SolveProps) {
  return <MissionDetailPage missionId={missionId} />;
}
