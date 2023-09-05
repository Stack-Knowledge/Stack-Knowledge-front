'use client';

import * as S from './style';
import { DefaultProfile } from '../../assets';

import { RankingPropsType } from 'types';

import Image from 'next/image';

interface RankingCardType extends RankingPropsType {
  rank: number;
}

const RankingCard: React.FC<RankingCardType> = ({
  rank,
  cumulatePoint,
  user: { profileImage, name },
}) => {
  return (
    <S.CardWrapper>
      {rank <= 3 && <S.Medal className='medal'>{rank}</S.Medal>}
      <S.ProfileWrapper>
        {profileImage ? (
          <Image fill alt='profile' src={profileImage} />
        ) : (
          <DefaultProfile />
        )}
      </S.ProfileWrapper>
      <S.UserName>{name}</S.UserName>
      <S.FlexWrapper>
        <S.Point>{cumulatePoint}</S.Point>
        <S.PointUnit>M</S.PointUnit>
      </S.FlexWrapper>
    </S.CardWrapper>
  );
};

export default RankingCard;
