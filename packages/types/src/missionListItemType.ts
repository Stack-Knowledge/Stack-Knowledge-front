export interface MissionListItemType {
  id: string;
  title: string;
  point: number;
  missionStatus: MissionStatus;
  user: {
    id: string;
    email: string;
    name: string;
    profileImage: string;
  };
}
