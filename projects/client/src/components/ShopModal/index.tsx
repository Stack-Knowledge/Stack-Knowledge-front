'use client';

import * as S from './style';
import { XIcon } from 'client/assets';
import { ShopModalItem } from 'client/components';
import { useEffect, useState } from 'react';

import { ShopItemType } from 'types';

interface ShopModalProps {
  selectedList: ShopItemType[] | [];
}

const ShopModal: React.FC<ShopModalProps> = ({ selectedList }) => {
  const [countList, setCountList] = useState<number[]>([]);

  useEffect(() => {
    setCountList(new Array(selectedList.length).fill(0));
  }, [selectedList]);

  const calculateCount = (index: number, isPlus: boolean) => {
    const newCountList = [...countList];
    isPlus
      ? newCountList[index]++
      : newCountList[index] !== 0 && newCountList[index]--;
    setCountList(newCountList);
  };

  return (
    <S.ModalWrapper>
      <form method='dialog'>
        <S.CloseButton>
          <XIcon />
        </S.CloseButton>
      </form>
      <S.ModalTitle>선택하신 상품이 맞으십니까?</S.ModalTitle>
      <S.ItemList>
        {selectedList?.map((selectedItem, index) => (
          <ShopModalItem
            key={selectedItem.itemId + index}
            data={selectedItem}
            count={countList[index]}
            calculateCount={calculateCount}
            index={index}
          />
        ))}
      </S.ItemList>
      <form method='dialog'>
        <S.PurchusButton>구매하기</S.PurchusButton>
      </form>
    </S.ModalWrapper>
  );
};

export default ShopModal;
