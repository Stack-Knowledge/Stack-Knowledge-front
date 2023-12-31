'use client';

import Image from 'next/image';

import DocumentIcon from 'common/assets/Banner/DocumentIcon.png';

import * as S from './style';

const Banner2 = () => (
  <S.BannerWrapper>
    <S.BannerTitleContainer>
      <S.BannerTitle>상품 받고</S.BannerTitle>
      <S.BannerTitle>시험 점수도 챙기자!!</S.BannerTitle>
    </S.BannerTitleContainer>
    <S.DocumentContainer>
      <S.DocumentIconWrapper>
        <Image src={DocumentIcon} alt='Doucument Icon' fill />
      </S.DocumentIconWrapper>
    </S.DocumentContainer>
  </S.BannerWrapper>
);

export default Banner2;
