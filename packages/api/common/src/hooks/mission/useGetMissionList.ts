import { useQuery } from '@tanstack/react-query';

import { missionQueryKeys, missionUrl, get, getHeaders } from 'api/common';

import type { MissionListItemType } from 'types';

import type { UseQueryOptions } from '@tanstack/react-query';

export const useGetMissionList = (
  options?: UseQueryOptions<MissionListItemType[]>
) =>
  useQuery<MissionListItemType[]>(
    missionQueryKeys.getMissionList(),
    () => get(missionUrl.mission(), getHeaders()),
    options
  );
