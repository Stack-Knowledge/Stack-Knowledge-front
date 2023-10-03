export interface StudentType {
  id: string;
  cumulatePoint: number;
  currentPoint: number;
  user: {
    id: string;
    email: string;
    name: string;
    profileImage: string | '';
  };
}
