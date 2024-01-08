import { MainPage } from 'admin/PageContainer';

interface UserProps {
  params: { userId: string };
}

export default function Home({ params: { userId } }: UserProps) {
  return <MainPage userId={userId} />;
}
