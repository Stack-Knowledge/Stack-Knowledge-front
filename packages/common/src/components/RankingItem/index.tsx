'use client';

import * as S from './style';

import { RankingPropsType } from 'types';

interface RankingItemProps extends RankingPropsType {
  ranking: number;
}

const RankingItem: React.FC<RankingItemProps> = ({
  cumulatePoint,
  ranking,
  user: { name, profileImage },
}) => (
  <S.ItemWrapper>
    <S.FlexWrapper>
      <S.Ranking>{ranking}</S.Ranking>
      <S.ProfileImage width={40} height={40} src={profileImage} />
      <S.UserName>{name}</S.UserName>
    </S.FlexWrapper>
    <S.FlexWrapper>
      <S.Point>{cumulatePoint}</S.Point>
      <S.PointUnit>M</S.PointUnit>
    </S.FlexWrapper>
  </S.ItemWrapper>
);

export default RankingItem;
