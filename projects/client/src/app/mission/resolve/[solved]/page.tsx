import { useRouter } from 'next/router';
import { MissionDetailPage } from 'client/PageContainer';

function MissionPage() {
  const router = useRouter();
  const missionId = router.query.missionId as string;

  return <MissionDetailPage missionId={missionId} />;
}

export default MissionPage;
