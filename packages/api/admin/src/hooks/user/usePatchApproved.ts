import { useMutation } from '@tanstack/react-query';

import { userQueryKeys, userUrl, patch } from 'api/common';

interface ApprovedStatus {
  approveStatus: 'REJECT' | 'APPROVED';
}

export const usePatchApproved = (userId: string) =>
  useMutation<void, Error, ApprovedStatus>(
    userQueryKeys.patchApproved(userId),
    (data) => patch(userUrl.approved(userId), data)
  );
