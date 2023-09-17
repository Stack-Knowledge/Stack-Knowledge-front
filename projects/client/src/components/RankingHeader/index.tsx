'use client';

import * as S from './style';

import DefaultProfile from 'common/assets/svg/DefaultProfile.svg';
import { slicePoint } from 'common';

import Image from 'next/image';

interface RankingHeaderImgType {
  profileImage: string | null;
  rank: number;
  point: number;
  name: string;
}

const RankingHeader: React.FC<RankingHeaderImgType> = ({
  profileImage,
  rank,
  point,
  name,
}) => {
  return (
    <S.RankingHeaderWrapper>
      <S.ProfileImageWrapper>
        <Image fill alt='profile' src={profileImage ?? DefaultProfile} />
      </S.ProfileImageWrapper>
      <S.UserContentWrapper>
        <S.UserRank>현재 {rank}위</S.UserRank>
        <S.UserName className='userContentCenter'>{name}</S.UserName>
        <S.UserPoint>{slicePoint(point)} M</S.UserPoint>
      </S.UserContentWrapper>
    </S.RankingHeaderWrapper>
  );
};

export default RankingHeader;
