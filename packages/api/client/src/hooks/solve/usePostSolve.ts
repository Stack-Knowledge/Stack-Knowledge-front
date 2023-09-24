import { useMutation } from '@tanstack/react-query';

import { post, solveQueryKeys, getHeaders, solveUrl } from 'api/common';

export const usePostSolve = (onSuccessFunc: () => void, missionId: string) =>
  useMutation<
    void,
    Error,
    {
      solvation: string;
    }
  >(
    solveQueryKeys.postSolve(missionId),
    (newSolve) => post(solveUrl.solve(missionId), newSolve),
    {
      onSuccess: () => {
        onSuccessFunc();
      },
    }
  );
