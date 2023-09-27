import { useQuery } from '@tanstack/react-query';

import { userQueryKeys, userUrl, get } from 'api/common';

interface SolveDetailResponseType {
  solveId: string;
  title: string;
  solvation: string;
}

export const useGetSolveDetail = (solvedId: string) =>
  useQuery<SolveDetailResponseType>(
    userQueryKeys.getSolveDetail(solvedId),
    () => get(userUrl.scoringResult(solvedId))
  );
