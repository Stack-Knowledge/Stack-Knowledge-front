import { useQuery } from '@tanstack/react-query';

import { missionQueryKeys, missionUrl, get } from 'api/common';

import type { UseQueryOptions } from '@tanstack/react-query';
import type { MissionListItemType } from 'types';

export const useGetMissionList = (
  options?: UseQueryOptions<MissionListItemType[]>
) =>
  useQuery<MissionListItemType[]>(
    missionQueryKeys.getMissionList(),
    () => get(missionUrl.mission()),
    options
  );
