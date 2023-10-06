'use client';

import * as S from './style';

import { VectorIcon } from 'common/assets';

import { ShopItemCard } from 'admin/components';

import { useGetOrderedItemList } from 'api/admin';

import type { OrderdItemType } from 'types';

import { useEffect, useState } from 'react';

const ShopCarousel = () => {
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [orderedItemList, setOrderedItemList] = useState<OrderdItemType[][]>();

  const { data } = useGetOrderedItemList();

  useEffect(() => {
    const newOrderedItemList: OrderdItemType[][] = [];
    let temp: OrderdItemType[] = [];
    data?.forEach((item, index) => {
      temp.push(item);
      if ((index + 1) % 10 === 0) {
        newOrderedItemList.push(temp);
        temp = [];
      }
    });
    if (data)
      newOrderedItemList.push(
        data.slice(newOrderedItemList.length * 10, data.length)
      );
    setOrderedItemList(newOrderedItemList);
  }, [data]);

  const moveLeft = () => {
    if (pageIndex > 0) setPageIndex((prev) => prev - 1);
  };

  const moveRight = () => {
    if (orderedItemList && pageIndex < orderedItemList.length - 1)
      if (
        pageIndex !== orderedItemList.length - 2 ||
        orderedItemList[orderedItemList.length - 1][0]
      )
        setPageIndex((prev) => prev + 1);
  };

  return (
    <S.CarouselWrapper>
      {orderedItemList?.length != 0 && orderedItemList && (
        <>
          <S.PointerWrapper onClick={moveLeft}>
            <VectorIcon direction='left' />
          </S.PointerWrapper>
          <S.ContentWrapper>
            {orderedItemList[pageIndex].map((item, index) => (
              <ShopItemCard key={item.id + index} data={item} />
            ))}
          </S.ContentWrapper>
          <S.PointerWrapper onClick={moveRight}>
            <VectorIcon direction='right' />
          </S.PointerWrapper>
        </>
      )}
    </S.CarouselWrapper>
  );
};

export default ShopCarousel;
