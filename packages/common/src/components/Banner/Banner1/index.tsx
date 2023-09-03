'use client';

import * as S from './style';
import Image from 'next/image';
import SunIcon from '../../../assets/Banner/SunIcon.png';
import LetgoIcon from '../../../assets/Banner/LetgoIcon.png';

const Banner1 = () => (
  <S.BannerWrapper>
    <S.BannerTitleContainer>
      <S.BannerTitle>문제만 풀어도 외출이 가능하다고??</S.BannerTitle>
      <S.SunIconWrapper>
        <Image src={SunIcon} alt='Sun Icon' width={291} height={192} />
      </S.SunIconWrapper>
    </S.BannerTitleContainer>
    <S.LetgoIconWrapper>
      <Image src={LetgoIcon} alt=' Icon' width={400} height={260} />
    </S.LetgoIconWrapper>
  </S.BannerWrapper>
);
export default Banner1;
