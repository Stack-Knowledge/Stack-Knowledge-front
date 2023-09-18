import { useQuery } from '@tanstack/react-query';

import { missionQueryKeys, missionUrl, get } from 'api/common';

import type { MissionListItemType } from 'types';

import type { UseQueryOptions } from '@tanstack/react-query';

export const useGetUserInfo = (
  options?: UseQueryOptions<MissionListItemType[]>
) =>
  useQuery<MissionListItemType[]>(
    missionQueryKeys.getMissionList(),
    () =>
      get(missionUrl.missionList(), {
        headers: {
          Authorization: localStorage.getItem('access_token'),
        },
      }),
    options
  );
