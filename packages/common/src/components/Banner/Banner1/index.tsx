'use client';

import Image from 'next/image';

import LetgoIcon from 'common/assets/Banner/LetgoIcon.png';
import SunIcon from 'common/assets/Banner/SunIcon.png';

import * as S from './style';

const Banner1 = () => (
  <S.BannerWrapper>
    <S.BannerTitleContainer>
      <S.BannerTitle>문제만 풀어도 외출이 가능하다고??</S.BannerTitle>
      <S.SunIconWrapper>
        <Image src={SunIcon} alt='Sun Icon' fill />
      </S.SunIconWrapper>
    </S.BannerTitleContainer>
    <S.LetgoIconContainer>
      <S.LetgoIconWrapper>
        <Image src={LetgoIcon} alt='Letgo Icon' fill />
      </S.LetgoIconWrapper>
    </S.LetgoIconContainer>
  </S.BannerWrapper>
);
export default Banner1;
