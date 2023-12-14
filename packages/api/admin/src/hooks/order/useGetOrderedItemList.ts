import { useQuery } from '@tanstack/react-query';

import { orderQueryKeys, orderUrl, get } from 'api/common';

import type { UseQueryOptions } from '@tanstack/react-query';
import type { OrderdItemType } from 'types';

export const useGetOrderedItemList = (
  options?: UseQueryOptions<OrderdItemType[]>
) =>
  useQuery<OrderdItemType[]>(
    orderQueryKeys.getOrderedItemList(),
    () => get(orderUrl.orderItem()),
    options
  );
