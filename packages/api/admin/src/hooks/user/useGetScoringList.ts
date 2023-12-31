import { useQuery } from '@tanstack/react-query';

import { userQueryKeys, userUrl, get } from 'api/common';

import type { UseQueryOptions } from '@tanstack/react-query';
import type { ScoringListType } from 'types';

export const useGetScoringList = (
  options?: UseQueryOptions<ScoringListType[]>
) =>
  useQuery<ScoringListType[]>(
    userQueryKeys.getScoringList(),
    () => get(userUrl.scoring()),
    options
  );
