import { useMutation } from '@tanstack/react-query';

import { post, userQueryKeys, userUrl } from 'api/common';

export const usePostScoringResult = (solveId: string) =>
  useMutation<void, Error, { solveStatus: string }>(
    userQueryKeys.postScoringResult(solveId),
    (solveStatus) => post(userUrl.scoringResult(solveId), solveStatus)
  );
