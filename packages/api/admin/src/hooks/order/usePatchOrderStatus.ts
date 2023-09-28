import { useMutation } from '@tanstack/react-query';

import { orderQueryKeys, orderUrl, patch } from 'api/common';

interface OrderStatusRequestType {
  count: number;
  orderId: string;
}

export const usePatchOrderStatus = (orderId: string) =>
  useMutation<void, Error, OrderStatusRequestType[]>(
    orderQueryKeys.patchOrderStatus(orderId),
    (data) => patch(orderUrl.orderItem(), data),
    {}
  );
