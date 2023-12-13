import { useMutation } from '@tanstack/react-query';

import { post, missionQueryKeys, missionUrl } from 'api/common';

import type { MissionDetailType } from 'types';

export const usePostMission = () =>
  useMutation<void, Error, MissionDetailType>(
    missionQueryKeys.postMission(),
    (newMission) => post(missionUrl.mission(), newMission)
  );
