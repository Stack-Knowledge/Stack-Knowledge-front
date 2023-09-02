'use client';

import * as S from './style';

const RankingCard = () => {
  return (
    <S.CardWrapper>
      <S.ProfileWrapper>{}</S.ProfileWrapper>
      <S.UserName>{}</S.UserName>
      <S.FlexWrapper>
        <S.Point>{}</S.Point>
        <S.PointUnit>M</S.PointUnit>
      </S.FlexWrapper>
    </S.CardWrapper>
  );
};

export default RankingCard;
