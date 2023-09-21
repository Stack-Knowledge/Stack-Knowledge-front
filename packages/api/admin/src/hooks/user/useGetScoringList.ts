import { useQuery } from '@tanstack/react-query';

import { userQueryKeys, userUrl, get, getHeaders } from 'api/common';

import type { ScoringListType } from 'types';

import type { UseQueryOptions } from '@tanstack/react-query';

export const useGetScoringList = (
  options?: UseQueryOptions<ScoringListType[]>
) =>
  useQuery<ScoringListType[]>(
    userQueryKeys.getScoringList(),
    () => get(userUrl.scoring(), getHeaders()),
    options
  );
