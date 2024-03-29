import { SolveStatus } from './solveStatusType';

export interface ScoringListType {
  solveId: string;
  solveStatus: SolveStatus;
  title: string;
  point: number;
  user: {
    id: string;
    name: string;
    profileImage: string | '';
  };
}
