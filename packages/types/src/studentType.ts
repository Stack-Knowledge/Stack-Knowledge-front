export interface StudentType {
  id: string;
  cumulatePoint: number;
  currentPoint: number;
  user: {
    id: string;
    name: string;
    profileImage: string | '';
  };
}
