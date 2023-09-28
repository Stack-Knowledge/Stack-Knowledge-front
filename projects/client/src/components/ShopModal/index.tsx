'use client';

import * as S from './style';
import { XIcon } from 'client/assets';
import { ShopModalItem } from 'client/components';

import { useEffect, useState } from 'react';

import { usePostItemOrder } from 'api/client';

import { ShopItemType } from 'types';

import { useRouter } from 'next/navigation';

interface ShopModalProps {
  selectedList: ShopItemType[] | [];
}

const ShopModal: React.FC<ShopModalProps> = ({ selectedList }) => {
  const [countList, setCountList] = useState<number[]>([]);

  const { push } = useRouter();

  const { mutate, isSuccess, isError, error } = usePostItemOrder();

  useEffect(() => {
    setCountList(new Array(selectedList.length).fill(1));
  }, [selectedList]);

  const calculateCount = (index: number, isPlus: boolean) => {
    const newCountList = [...countList];
    isPlus
      ? newCountList[index]++
      : newCountList[index] !== 1 && newCountList[index]--;
    setCountList(newCountList);
  };

  const handleSubmit = () => {
    const orderList = countList.map((item, i) => {
      return { itemId: selectedList[i].itemId, count: item };
    });
    mutate(orderList);
  };

  if (isSuccess) {
    push('/');
    alert('상품이 구매되었습니다!');
  }

  if (isError) {
    if (error && error.response?.status === 400) {
      alert('마일리지가 부족합니다');
      location.reload();
    }
  }

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
            key={selectedItem.itemId}
            data={selectedItem}
            count={countList[index]}
            calculateCount={calculateCount}
            index={index}
          />
        ))}
      </S.ItemList>
      <form method='dialog'>
        <S.PurchusButton onClick={handleSubmit}>구매하기</S.PurchusButton>
      </form>
    </S.ModalWrapper>
  );
};

export default ShopModal;
