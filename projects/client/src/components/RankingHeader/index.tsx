'use client';

import * as S from './style';

import DefaultProfile from 'common/assets/svg/DefaultProfile.svg';
import { slicePoint } from 'common';

import { RankingPropsType } from 'types';

import Image from 'next/image';

interface RankingHeaderProps {
  data: RankingPropsType;
  ranking: number;
}

const RankingHeader: React.FC<RankingHeaderProps> = ({
  ranking,
  data: {
    cumulatePoint,
    user: { name, profileImage },
  },
}) => {
  return (
    <S.RankingHeaderWrapper>
      <S.ProfileImageWrapper>
        <Image fill alt='profile' src={profileImage ?? DefaultProfile} />
      </S.ProfileImageWrapper>
      <S.UserContentWrapper>
        <S.UserRank>현재 {ranking}위</S.UserRank>
        <S.UserName className='userContentCenter'>{name}</S.UserName>
        <S.UserPoint>{slicePoint(cumulatePoint)} M</S.UserPoint>
      </S.UserContentWrapper>
    </S.RankingHeaderWrapper>
  );
};

export default RankingHeader;
