import { useQuery } from '@tanstack/react-query';

import { userUrl, userQueryKeys, get } from 'api/common';

interface SolveDetailResponseType {
  solveId: string;
  title: string;
  solvation: string;
}

import type { UseQueryOptions } from '@tanstack/react-query';

export const useGetSolveDetail = (
  missionId: string,
  options?: UseQueryOptions<SolveDetailResponseType>
) =>
  useQuery<SolveDetailResponseType>(
    userQueryKeys.getSolveDetail(missionId),
    () => get(userUrl.solveDetail(missionId)),
    options
  );
