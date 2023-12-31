import { useQuery } from '@tanstack/react-query';

import { studentQueryKeys, studentUrl, get } from 'api/common';

import type { UseQueryOptions } from '@tanstack/react-query';
import type { RankingPropsType } from 'types';

export const useGetRankingList = (
  options?: UseQueryOptions<RankingPropsType[]>
) =>
  useQuery<RankingPropsType[]>(
    studentQueryKeys.getRankingList(),
    () => get(studentUrl.rankingList()),
    options
  );
