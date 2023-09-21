import { SolveStatus } from './solveStatusType';

export interface ScoringListType {
  solveId: string;
  solveStatus: SolveStatus;
  user: {
    id: string;
    email: string;
    name: string;
    profileImage: string | '';
  };
}
