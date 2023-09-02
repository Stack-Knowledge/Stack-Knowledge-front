import React, { useState, useEffect, useRef } from 'react';
import Banner1 from './Banner1';
import Banner2 from './Banner2';
import Banner3 from './Banner3';
import * as S from './style';

type BannerType = {
  key: string;
  component: JSX.Element;
};

const Banner = () => {
  const banners: BannerType[] = [
    { key: '1', component: <Banner1 key='banner1' /> },
    { key: '2', component: <Banner2 key='banner2' /> },
    { key: '3', component: <Banner3 key='banner3' /> },
  ];

  const [currentBanner, setCurrentBanner] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // setInterval 함수를 제어?함

  const showBanner = (index: number) => {
    setCurrentBanner(index);
    if (intervalRef.current) {
      // setinterval 재정의
      clearInterval(intervalRef.current);
    }
    startInterval();
  };

  const startInterval = () => {
    intervalRef.current = setInterval(showNextBanner, 5000);
  };

  const showNextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  useEffect(() => {
    startInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <S.BannerWrapper>
      <S.DotWrapper>
        {banners.map((_, index) => (
          <S.Dot
            key={`dot-${index}`}
            active={index === currentBanner}
            onClick={() => showBanner(index)}
          />
        ))}
      </S.DotWrapper>

      {banners[currentBanner].component}
    </S.BannerWrapper>
  );
};

export default Banner;
