import { useMutation } from '@tanstack/react-query';

import { post, solveQueryKeys, solveUrl } from 'api/common';

export const usePostSolve = (missionId: string) =>
  useMutation<
    void,
    Error,
    {
      solvation: string;
    }
  >(solveQueryKeys.postSolve(missionId), (newSolve) =>
    post(solveUrl.solve(missionId), newSolve)
  );
