import { useMutation } from '@tanstack/react-query';

import { userQueryKeys, userUrl, patch } from 'api/common';

export interface ApprovedStatus {
  approveStatus: 'REJECTED' | 'APPROVED';
}

export const usePatchApprovalStatus = (userId: string) =>
  useMutation<void, Error, ApprovedStatus>(
    userQueryKeys.patchApprovedStatus(userId),
    (data) => patch(userUrl.approvedStatus(userId), data)
  );
