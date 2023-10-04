'use client';

import * as S from './style';

import Image from 'next/image';

import { slicePoint } from 'common';

import { OrderdItemType } from 'types';

import { usePatchOrderStatus } from 'api/admin';

import { Modal } from 'admin/components';

import { useRef } from 'react';

import { toast } from 'react-toastify';

interface ShopItemCardProps {
  data: OrderdItemType;
}

const ShopItemCard: React.FC<ShopItemCardProps> = ({
  data: { item, price, count, user, id },
}) => {
  const dialog = useRef<HTMLDialogElement>(null);
  const { mutate, isSuccess } = usePatchOrderStatus(id);

  const onClick = () => {
    mutate([{ count: 1, orderId: id }]);
  };

  if (isSuccess) {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    toast.success('상품 개수가 1개 차감되었습니다.');
  }

  return (
    <S.CardWrapper onClick={() => dialog.current?.showModal()}>
      <S.ImageWrapper>
        <Image src={item.image} alt='item image' unoptimized fill />
      </S.ImageWrapper>
      <S.TextWrapper>
        <S.UserName>{user.name}</S.UserName>
        <S.Details>{count}개</S.Details>
      </S.TextWrapper>
      <S.TextWrapper>
        <S.Details>{item.name}</S.Details>
        <S.PriceWrapper>
          <S.Price>{slicePoint(price)}</S.Price>
          <S.WonText>M</S.WonText>
        </S.PriceWrapper>
      </S.TextWrapper>
      <S.ModalWrapper ref={dialog}>
        <Modal onClick={onClick} content='상품을 차감하시겠습니까?' />
      </S.ModalWrapper>
    </S.CardWrapper>
  );
};

export default ShopItemCard;
