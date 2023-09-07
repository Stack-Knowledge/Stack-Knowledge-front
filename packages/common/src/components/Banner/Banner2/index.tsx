'use client';

import * as S from './style';
import Image from 'next/image';
import DocumentIcon from '../../../assets/Banner/DocumentIcon.png';

const Banner2 = () => (
  <S.BannerWrapper>
    <S.BannerTitleContainer>
      <S.BannerTitle>상품받고</S.BannerTitle>
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
