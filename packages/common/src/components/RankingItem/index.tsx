'use client';

import * as S from './style';
import { slicePoint } from 'common/utils';
import DefaultProfile from 'common/assets/svg/DefaultProfile.svg';

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
      <S.ProfileImage
        alt='profile image'
        width={40}
        height={40}
        src={profileImage ?? DefaultProfile}
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
