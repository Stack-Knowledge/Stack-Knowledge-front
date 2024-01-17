export interface RankingPropsType {
  id: string;
  cumulatePoint: number;
  user: {
    id: string;
    name: string;
    profileImage: string | null;
  };
}
