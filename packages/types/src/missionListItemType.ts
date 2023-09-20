export interface MissionListItemType {
  id: string;
  title: string;
  point: number;
  missionStatus: 'CLOSED' | 'OPENED' | 'AVAILABLE_OPEN';
  user: {
    id: string;
    email: string;
    name: string;
    profileImage: string;
  };
}
