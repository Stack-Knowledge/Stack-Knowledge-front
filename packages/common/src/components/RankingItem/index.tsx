'use client';

import DefaultProfile from 'common/assets/svg/DefaultProfile.svg';
import { slicePoint } from 'common/utils';

import * as S from './style';

import type { RankingPropsType } from 'types';

interface RankingItemProps {
  item: RankingPropsType;
  ranking: number;
}

const RankingItem: React.FC<RankingItemProps> = ({
  ranking,
  item: {
    cumulatePoint,
    user: { name, profileImage },
  },
}) => (
  <S.ItemWrapper>
    <S.FlexWrapper>
      <S.Ranking>{ranking}</S.Ranking>
      <S.ProfileImage
        alt='profile image'
        width={40}
        height={40}
        src={profileImage ? profileImage : DefaultProfile}
      />
      <S.UserName>{name}</S.UserName>
    </S.FlexWrapper>
    <S.FlexWrapper>
      <S.Point>{slicePoint(cumulatePoint)}</S.Point>
      <S.PointUnit>M</S.PointUnit>
    </S.FlexWrapper>
  </S.ItemWrapper>
);

export default RankingItem;
