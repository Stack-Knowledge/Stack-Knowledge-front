'use client';

import * as S from './style';
import { SunIcon, LetGoIcon } from '../../../assets';

const Banner1 = () => (
  <S.BannerWrapper>
    <S.BannerTitleContainer>
      <S.BannerTitle>문제만 풀어도 외출이 가능하다고??</S.BannerTitle>
      <S.SunIconWrapper>
        <SunIcon />
      </S.SunIconWrapper>
    </S.BannerTitleContainer>
    <S.LetgoIconWrapper>
      <LetGoIcon />
    </S.LetgoIconWrapper>
  </S.BannerWrapper>
);
export default Banner1;
