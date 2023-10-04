'use client';

import React, { useRef } from 'react';

import Image from 'next/image';

import { usePostUploadProfile } from 'api/client';
import DefaultProfile from 'common/assets/svg/DefaultProfile.svg';
import { slicePoint } from 'common';

import * as S from './style';

import { RankingPropsType } from 'types';

import { toast } from 'react-toastify';

interface RankingHeaderProps {
  ranking: number;
  data: RankingPropsType;
}

const RankingHeader: React.FC<RankingHeaderProps> = ({
  ranking,
  data: {
    cumulatePoint,
    user: { name, profileImage },
  },
}) => {
  const { mutate, isSuccess, isError } = usePostUploadProfile();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const formData = new FormData();
      formData.append('image', e.target.files[0], e.target.files[0].name);
      mutate(formData);
    }
  };

  if (isSuccess) {
    setTimeout(() => {
      location.reload();
    }, 1000);
    toast.success('이미지 등록에 성공했습니다.');
  }

  if (isError) {
    setTimeout(() => {
      location.reload();
    }, 1000);
    toast.error('잘못된 파일 유형입니다.');
  }

  return (
    <S.RankingHeaderWrapper>
      <S.ProfileImageWrapper onClick={() => fileInputRef.current?.click()}>
        <input
          type='file'
          style={{ display: 'none' }}
          ref={fileInputRef}
          onChange={handleImageChange}
        />
        <Image
          key={profileImage}
          fill
          alt='profile'
          src={profileImage === '' ? DefaultProfile : profileImage}
        />
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
