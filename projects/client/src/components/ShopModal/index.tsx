'use client';

import * as S from './style';
import { XIcon } from 'client/assets';
import { ShopModalItem } from 'client/components';

import { ShopItemType } from 'types';

interface ShopModalProps {
  selectedList: ShopItemType[] | [];
}

const ShopModal: React.FC<ShopModalProps> = ({ selectedList }) => (
  <S.ModalWrapper>
    <form method='dialog'>
      <S.CloseButton>
        <XIcon />
      </S.CloseButton>
    </form>
    <S.ModalTitle>선택하신 상품이 맞으십니까?</S.ModalTitle>
    <S.ItemList>
      {selectedList?.map((selectedItem, index) => (
        <ShopModalItem key={selectedItem.itemId + index} data={selectedItem} />
      ))}
    </S.ItemList>
    <form method='dialog'>
      <S.PurchusButton>구매하기</S.PurchusButton>
    </form>
  </S.ModalWrapper>
);

export default ShopModal;
