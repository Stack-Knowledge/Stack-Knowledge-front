import { useQuery } from '@tanstack/react-query';

import { missionUrl, missionQueryKeys, get } from 'api/common';

import type { MissionDetailType } from 'types';

import type { UseQueryOptions } from '@tanstack/react-query';

export const useGetMissionDetail = (
  missionId: string,
  options?: UseQueryOptions<MissionDetailType[]>
) =>
  useQuery<MissionDetailType[]>(
    missionQueryKeys.getMissionDetail(missionId),
    () => get(missionUrl.missionDetail(missionId)),
    options
  );
