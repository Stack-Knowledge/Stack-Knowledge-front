'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { toast } from 'react-toastify';

import { XIcon } from 'client/assets';
import { ShopModalItem } from 'client/components';

import { usePostItemOrder } from 'api/client';

import * as S from './style';

import type { ShopItemType } from 'types';

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
    const orderList = countList.map((item, i) => ({
      itemId: selectedList[i].itemId,
      count: item,
    }));
    mutate(orderList);
  };

  if (isSuccess) {
    push('/');
    toast.success('상품이 성공적으로 구매되었습니다.');
  }

  if (isError) {
    if (error && error.response?.status === 400) {
      setTimeout(() => {
        location.reload();
      }, 1000);
      toast.error('마일리지가 부족합니다.');
    }
  }

  return (
    <S.ModalWrapper>
      <form method='dialog'>
        <S.CloseButton>
          <XIcon />
        </S.CloseButton>
      </form>
      {selectedList.length > 0 ? (
        <>
          <S.ModalTitle>선택하신 상품이 맞습니까?</S.ModalTitle>
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
        </>
      ) : (
        <S.ModalTitle>선택하신 상품이 없습니다...</S.ModalTitle>
      )}
    </S.ModalWrapper>
  );
};

export default ShopModal;
