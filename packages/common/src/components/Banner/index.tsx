'use client';

import { useState, useEffect } from 'react';

import { Banner1, Banner2, Banner3 } from 'common/components';

import * as S from './style';

const Banner = () => {
  const banners: JSX.Element[] = [
    <Banner1 key={0} />,
    <Banner2 key={1} />,
    <Banner3 key={2} />,
  ];
  const [currentBanner, setCurrentBanner] = useState<number>(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [currentBanner]);

  return (
    <S.BannerWrapper>
      <S.BannerContainer
        currentBanner={currentBanner}
        bannerCount={banners.length}
      >
        {banners.map((banner, index) => (
          <S.BannerItem key={`banner-${index}`}>{banner}</S.BannerItem>
        ))}
      </S.BannerContainer>
      <S.DotWrapper>
        {banners.map((_, index) => (
          <S.Dot
            key={`dot-${index}`}
            active={index === currentBanner}
            onClick={() => setCurrentBanner(index)}
          />
        ))}
      </S.DotWrapper>
    </S.BannerWrapper>
  );
};

export default Banner;
