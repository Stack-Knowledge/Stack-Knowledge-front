'use client';

import * as S from './style';
import { ShopItem, ShopModal } from 'client/components';

import { slicePoint } from 'common';

import { useEffect, useRef, useState } from 'react';

import { useGetItemList } from 'api/client';

const ShopPage = () => {
  const dialog = useRef<HTMLDialogElement>(null);

  const { data } = useGetItemList();

  const [itemStatus, setItemStatus] = useState<boolean[]>([]);

  const onItemClick = (index: number) => {
    const newItemStatus = [...itemStatus];
    newItemStatus[index] = !newItemStatus[index];
    setItemStatus(newItemStatus);
  };

  useEffect(() => {
    setItemStatus(new Array(data?.length).fill(false));
  }, []);

  return (
    <S.PageWrapper>
      <S.MiledgeTitle>현재 마일리지</S.MiledgeTitle>
      <S.FlexWrapper>
        <S.MilidgePoint>{slicePoint(1000)}</S.MilidgePoint>
        <S.MilidgeUnit>M</S.MilidgeUnit>
      </S.FlexWrapper>
      <S.ListWrapper>
        <S.ItemText>상품</S.ItemText>
        {data && (
          <S.ItemList>
            {data.map((item, index) => (
              <ShopItem
                index={index}
                onItemClick={onItemClick}
                key={item.itemId + index}
                data={item}
                itemStatus={itemStatus[index]}
              />
            ))}
          </S.ItemList>
        )}
      </S.ListWrapper>
      <S.SelectButton onClick={() => dialog.current?.showModal()}>
        선택하기
      </S.SelectButton>
      {data && (
        <S.ModalWrapper ref={dialog}>
          <ShopModal
            selectedList={data.filter((_, index) => itemStatus[index])}
          />
        </S.ModalWrapper>
      )}
    </S.PageWrapper>
  );
};

export default ShopPage;
