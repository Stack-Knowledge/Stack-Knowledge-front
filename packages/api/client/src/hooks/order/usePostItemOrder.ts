import { useMutation } from '@tanstack/react-query';

import { post, orderQueryKeys, orderUrl } from 'api/common';

import type { AxiosError } from 'axios';

interface ItemOrderRequestType {
  itemId: string;
  count: number;
}

export const usePostItemOrder = () =>
  useMutation<void, AxiosError, ItemOrderRequestType[]>(
    orderQueryKeys.postItem(),
    (orderList) => post(orderUrl.orderItem(), orderList)
  );
