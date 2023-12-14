import { useMutation } from '@tanstack/react-query';

import { post, solveQueryKeys, solveUrl } from 'api/common';

import type { AxiosError } from 'axios';

export const usePostSolve = (missionId: string) =>
  useMutation<
    void,
    AxiosError,
    {
      solvation: string;
    }
  >(solveQueryKeys.postSolve(missionId), (newSolve) =>
    post(solveUrl.solve(missionId), newSolve)
  );
