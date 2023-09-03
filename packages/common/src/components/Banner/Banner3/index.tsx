'use client';

import * as S from './style';
import Image from 'next/image';
import GiftIcon from '../../../assets/Banner/GiftIcon.png';

const Banner3 = () => (
  <S.BannerWrapper>
    <S.BannerTitleContainer>
      <S.BannerTitle>문제 풀고</S.BannerTitle>
      <S.BannerTitle>상품까지 챙기자!!</S.BannerTitle>
    </S.BannerTitleContainer>
    <S.GiftIconWrapper>
      <Image src={GiftIcon} alt='Gift Icon' width={287} height={287} />
    </S.GiftIconWrapper>
  </S.BannerWrapper>
);
export default Banner3;
