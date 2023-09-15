'use client';

import * as S from './style';
import { ShopItem, ShopModal } from 'client/components';

import { slicePoint } from 'common';

import { useEffect, useRef, useState } from 'react';

const list = [
  {
    itemId: 'id',
    name: '자장면1',
    text: '자장면',
    price: 5000,
    image:
      'https://mblogthumb-phinf.pstatic.net/MjAxNzAxMjNfNDkg/MDAxNDg1MTYwMTQ1MDc5.H7I84KnCb0_U0Fb312NMMk10dbmNhdMb45jDiNYs13Eg.e3185KBkHafPDJpOjsZ7vvvH741l0TzEt2vVNvePS7Mg.JPEG.china_lab/shutterstock_524181190.jpg?type=w800',
  },
  {
    itemId: 'id',
    name: '자장면2',
    text: '자장면',
    price: 5000,
    image:
      'https://mblogthumb-phinf.pstatic.net/MjAxNzAxMjNfNDkg/MDAxNDg1MTYwMTQ1MDc5.H7I84KnCb0_U0Fb312NMMk10dbmNhdMb45jDiNYs13Eg.e3185KBkHafPDJpOjsZ7vvvH741l0TzEt2vVNvePS7Mg.JPEG.china_lab/shutterstock_524181190.jpg?type=w800',
  },
  {
    itemId: 'id',
    name: '자장면3',
    text: '자장면',
    price: 5000,
    image:
      'https://mblogthumb-phinf.pstatic.net/MjAxNzAxMjNfNDkg/MDAxNDg1MTYwMTQ1MDc5.H7I84KnCb0_U0Fb312NMMk10dbmNhdMb45jDiNYs13Eg.e3185KBkHafPDJpOjsZ7vvvH741l0TzEt2vVNvePS7Mg.JPEG.china_lab/shutterstock_524181190.jpg?type=w800',
  },
  {
    itemId: 'id',
    name: '자장면4',
    text: '자장면',
    price: 5000,
    image:
      'https://mblogthumb-phinf.pstatic.net/MjAxNzAxMjNfNDkg/MDAxNDg1MTYwMTQ1MDc5.H7I84KnCb0_U0Fb312NMMk10dbmNhdMb45jDiNYs13Eg.e3185KBkHafPDJpOjsZ7vvvH741l0TzEt2vVNvePS7Mg.JPEG.china_lab/shutterstock_524181190.jpg?type=w800',
  },
];

const ShopPage = () => {
  const dialog = useRef<HTMLDialogElement>(null);

  const [itemStatus, setItemStatus] = useState<boolean[]>([]);

  const onItemClick = (index: number) => {
    const newItemStatus = [...itemStatus];
    newItemStatus[index] = !newItemStatus[index];
    setItemStatus(newItemStatus);
  };

  useEffect(() => {
    setItemStatus(new Array(list.length).fill(false));
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
        <S.ItemList>
          {list.map((item, index) => (
            <ShopItem
              index={index}
              onItemClick={onItemClick}
              key={item.itemId + index}
              data={item}
              itemStatus={itemStatus[index]}
            />
          ))}
        </S.ItemList>
      </S.ListWrapper>
      <S.SelectButton onClick={() => dialog.current?.showModal()}>
        선택하기
      </S.SelectButton>
      <S.ModalWrapper ref={dialog}>
        <ShopModal
          selectedList={list.filter((_, index) => itemStatus[index])}
        />
      </S.ModalWrapper>
    </S.PageWrapper>
  );
};

export default ShopPage;