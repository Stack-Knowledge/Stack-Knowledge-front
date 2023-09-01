'use client';

import * as S from './style';
import { SunIcon, LetGoIcon, DocumentIcon } from '../../../assets';

const Banner2 = () => (
  <S.BannerWrapper>
    <S.BannerTitleContainer>
      <S.BannerTitle>상품받고</S.BannerTitle>
      <S.BannerTitle>시험 점수도 챙기자!!</S.BannerTitle>
    </S.BannerTitleContainer>
    <S.DocumentIconWrapper>
      <DocumentIcon />
    </S.DocumentIconWrapper>
  </S.BannerWrapper>
);
export default Banner2;
