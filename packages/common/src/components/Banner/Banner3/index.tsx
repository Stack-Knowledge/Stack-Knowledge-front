'use client';

import * as S from './style';
import { GiftIcon } from '../../../assets';

const Banner3 = () => (
  <S.BannerWrapper>
    <S.BannerTitleContainer>
      <S.BannerTitle>문제 풀고</S.BannerTitle>
      <S.BannerTitle>상품까지 챙기자!!</S.BannerTitle>
    </S.BannerTitleContainer>
    <S.GiftIconWrapper>
      <GiftIcon />
    </S.GiftIconWrapper>
  </S.BannerWrapper>
);
export default Banner3;
