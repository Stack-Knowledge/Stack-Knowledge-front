import { useMutation } from '@tanstack/react-query';

import { post, missionQueryKeys, missionUrl, getHeaders } from 'api/common';

export const usePostMission = () =>
  useMutation<
    void,
    Error,
    { title: string; content: string; timeLimit: number }
  >(missionQueryKeys.postMission(), (newMission) =>
    post(missionUrl.mission(), newMission, getHeaders())
  );
