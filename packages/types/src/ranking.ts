export interface RankingPropsType {
  id: string;
  cumulatePoint: number;
  user: {
    id: string;
    email: string;
    name: string;
    profileImage: string;
  };
}
