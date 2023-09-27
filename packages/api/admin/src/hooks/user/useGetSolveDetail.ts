import { useQuery } from '@tanstack/react-query';

import { userQueryKeys, userUrl, get } from 'api/common';

interface SolveDetailResponseType {
  solveId: string;
  title: string;
  solvation: string;
}

export const useGetSolveDetail = (solveId: string) =>
  useQuery<SolveDetailResponseType>(userQueryKeys.getSolveDetail(solveId), () =>
    get(userUrl.solveDetail(solveId))
  );
