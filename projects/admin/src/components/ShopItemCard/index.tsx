'use client';

import * as S from './style';

import Image from 'next/image';

import { slicePoint } from 'common';

import { OrderdItemType } from 'types';

import { useRouter } from 'next/navigation';

import { usePatchOrderStatus } from 'api/admin';

interface ShopItemCardProps {
  data: OrderdItemType;
}

const ShopItemCard: React.FC<ShopItemCardProps> = ({
  data: { item, price, count, user, id },
}) => {
  const { push } = useRouter();

  const { mutate, isSuccess } = usePatchOrderStatus(id);

  const onClick = () => {
    mutate();
  };

  if (isSuccess) {
  }

  return (
    <S.CardWrapper onClick={onClick}>
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
    </S.CardWrapper>
  );
};

export default ShopItemCard;
