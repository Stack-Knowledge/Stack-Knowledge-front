import { useQuery } from '@tanstack/react-query';

import { userQueryKeys, userUrl, get } from 'api/common';

import type { UseQueryOptions } from '@tanstack/react-query';
import type { ApprovalStatusType } from 'types';

export const useGetApprovedList = (
  options?: UseQueryOptions<ApprovalStatusType[]>
) =>
  useQuery<ApprovalStatusType[]>(
    userQueryKeys.getApprovedList(),
    () => get(userUrl.approvedList()),
    options
  );
