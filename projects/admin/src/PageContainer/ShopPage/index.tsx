'use client';

import { useGetOrderedItemList } from 'api/admin';
import * as S from './style';

import { ShopCarousel } from 'admin/components';

const ShopPage = () => {
  const { data } = useGetOrderedItemList();

  return (
    <S.PageWrapper>
      <S.ShopText>상점</S.ShopText>
      {data?.length > 0 ? <ShopCarousel /> : <h1>상품이 없습니다...</h1>}
    </S.PageWrapper>
  );
};

export default ShopPage;
