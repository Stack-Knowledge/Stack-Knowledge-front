import { GradingPage } from 'admin/PageContainer';

interface GradingProps {
  params: { solveId: string };
}

export default function Grading({ params: { solveId } }: GradingProps) {
  return <GradingPage solveId={solveId} />;
}
