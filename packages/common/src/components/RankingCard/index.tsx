'use client';

import * as S from './style';

import { RankingPropsType } from 'types';

import DefaultProfile from '../../assets/svg/DefaultProfile.svg';

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
        <Image fill alt='profile' src={profileImage ?? DefaultProfile} />
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
