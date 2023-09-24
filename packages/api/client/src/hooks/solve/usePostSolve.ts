import { useMutation } from '@tanstack/react-query';

import { post, solveQueryKeys, getHeaders, solveUrl } from 'api/common';

export const usePostSolve = (
  onSuccessFunc: () => void,
  missionId: string,
  solveId: string
) =>
  useMutation<
    void,
    Error,
    {
      solvation: string;
    }
  >(
    solveQueryKeys.postSolve(missionId),
    (newSolve) => post(solveUrl.solve(solveId), newSolve),
    {
      onSuccess: () => {
        onSuccessFunc();
      },
    }
  );
