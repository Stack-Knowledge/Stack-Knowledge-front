import { useMutation } from '@tanstack/react-query';

import { orderQueryKeys, orderUrl, patch } from 'api/common';

export const usePatchOrderStatus = (orderId: string) =>
  useMutation(
    orderQueryKeys.patchOrderStatus(orderId),
    () =>
      patch(orderUrl.itemStatus(orderId), {
        count: 1,
      }),
    {}
  );
