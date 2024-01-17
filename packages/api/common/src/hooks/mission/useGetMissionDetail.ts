import { useQuery } from '@tanstack/react-query';

import { missionUrl, missionQueryKeys, get } from 'api/common';

import type { UseQueryOptions } from '@tanstack/react-query';
import type { MissionDetailType } from 'types';

export const useGetMissionDetail = (
  missionId: string,
  options?: UseQueryOptions<MissionDetailType>
) =>
  useQuery<MissionDetailType>(
    missionQueryKeys.getMissionDetail(missionId),
    () => get(missionUrl.missionDetail(missionId)),
    options
  );
