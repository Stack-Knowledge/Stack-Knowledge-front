import { Grading } from './grading';

export interface ScoringListType {
  solveId: string;
  solveStatus: Grading;
  user: {
    id: string;
    email: string;
    name: string;
    profileImage: string | '';
  };
}
