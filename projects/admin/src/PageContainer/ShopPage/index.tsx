'use client';

import * as S from './style';

import { ShopCarousel } from 'admin/components';

const ShopPage = () => (
  <S.PageWrapper>
    <S.ShopText>상점</S.ShopText>
    <ShopCarousel />
  </S.PageWrapper>
);

export default ShopPage;
