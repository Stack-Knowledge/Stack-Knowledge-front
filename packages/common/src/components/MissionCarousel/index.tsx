'use client';

import * as S from './style';

import { VectorIcon } from 'common/assets';

import { ShopItemType } from 'types';

interface CarouselProps {
  children: JSX.Element;
  contentList: ShopItemType[];
}

const Carousel: React.FC<CarouselProps> = ({ children, contentList }) => {
  return (
    <S.CarouselWrapper>
      <VectorIcon direction='left' />
      <S.CarouselWrapper>
        {contentList.map((content, index) => children)}
      </S.CarouselWrapper>
      <VectorIcon direction='right' />
    </S.CarouselWrapper>
  );
};

export default Carousel;
