export interface Mission {
  id: string;
  title: string;
  point: number;
  missionStatus: 'CLOSED' | 'OPENED' | 'AVAILABLE_OPEN';
  // CLOSED : Mission을 풀 수 없는 상태
  // OPENED : Mission을 풀 수 있는 상태
  // AVAILABLE_OPEN : Mission을 내일 풀 수 있습니다.
  user: {
    id: string;
    email: string;
    name: string;
    profileImage: string;
  };
}
