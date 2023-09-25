import { useMutation } from '@tanstack/react-query';

import { post, missionQueryKeys, missionUrl } from 'api/common';

export const usePostMission = (onSuccessFunc: () => void) =>
  useMutation<
    void,
    Error,
    { title: string; content: string; timeLimit: number }
  >(
    missionQueryKeys.postMission(),
    (newMission) => post(missionUrl.mission(), newMission),
    {
      onSuccess: () => {
        onSuccessFunc();
      },
    }
  );
