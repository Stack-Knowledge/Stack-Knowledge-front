import { useQuery } from '@tanstack/react-query';

import { studentQueryKeys, studentUrl, get, getHeaders } from 'api/common';

import type { RankingPropsType } from 'types';

import type { UseQueryOptions } from '@tanstack/react-query';

export const useGetRankingList = (
  options?: UseQueryOptions<RankingPropsType[]>
) =>
  useQuery<RankingPropsType[]>(
    studentQueryKeys.getRankingList(),
    () => get(studentUrl.rankingList(), getHeaders()),
    options
  );
