import { useMutation } from '@tanstack/react-query';

import { post, orderQueryKeys, orderUrl } from 'api/common';

interface ItemOrderRequestType {
  itemId: string;
  count: number;
}

export const usePostItemOrder = () =>
  useMutation<void, Error, ItemOrderRequestType[]>(
    orderQueryKeys.postItem(),
    (orderList) => post(orderUrl.orderItem(), orderList)
  );
