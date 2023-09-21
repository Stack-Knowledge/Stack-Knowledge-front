import { useMutation } from '@tanstack/react-query';

import { post, userQueryKeys, userUrl, getHeaders } from 'api/common';

import { SolveStatus } from 'types';

export const usePostScoringResult = (solveId: string) =>
  useMutation<void, Error, { solveStatus: SolveStatus }>(
    userQueryKeys.postScoringResult(solveId),
    (solveStatus) =>
      post(userUrl.scoringResult(solveId), solveStatus, getHeaders()),
    {
      onSuccess: () => {},
    }
  );
