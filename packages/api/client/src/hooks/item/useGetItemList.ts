import { useQuery } from '@tanstack/react-query';

import { itemQueryKeys, itemUrl, get } from 'api/common';

import type { UseQueryOptions } from '@tanstack/react-query';
import type { ShopItemType } from 'types';

export const useGetItemList = (options?: UseQueryOptions<ShopItemType[]>) =>
  useQuery<ShopItemType[]>(
    itemQueryKeys.getItemList(),
    () => get(itemUrl.itemList()),
    options
  );
