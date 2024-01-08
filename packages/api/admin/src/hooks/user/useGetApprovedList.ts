import { useQuery } from '@tanstack/react-query';

import { userQueryKeys, userUrl, get } from 'api/common';

import type { UseQueryOptions } from '@tanstack/react-query';
import type { approvedType } from 'types';

export const useGetApprovedList = (options?: UseQueryOptions<approvedType[]>) =>
  useQuery<approvedType[]>(
    userQueryKeys.getApprovedList(),
    () => get(userUrl.approvedList()),
    options
  );
