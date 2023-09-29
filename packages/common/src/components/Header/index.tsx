'use client';

import * as S from './style';
import { usePathname } from 'next/navigation';

import {
  HomeIcon,
  LogoIcon,
  QuestionIcon,
  RankingIcon,
  ShopIcon,
  MadeIcon,
} from 'common/assets';

import { useEffect, useState } from 'react';

interface HeaderProps {
  role: 'admin' | 'client';
}

const Header: React.FC<HeaderProps> = ({ role }) => {
  const pathname = usePathname();
  if (pathname === '/auth/login') return <></>;

  const handleLinkClick = (e: any) => {
    if (pathname.includes('/mission/resolve')) {
      e.preventDefault();
    }
  };

  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.LogoContainer href='/' onClick={handleLinkClick}>
          <LogoIcon />
          <S.Title>Stack Knowledge</S.Title>
        </S.LogoContainer>
        <S.MenuNav role={role}>
          <S.MenuItemWrapper href='/' onClick={handleLinkClick}>
            <HomeIcon />
            <S.ItemTitle>홈</S.ItemTitle>
          </S.MenuItemWrapper>
          {role === 'admin' ? (
            <>
              <S.MenuItemWrapper
                href='/mission/scoring'
                onClick={handleLinkClick}
              >
                <QuestionIcon />
                <S.ItemTitle>채점하기</S.ItemTitle>
              </S.MenuItemWrapper>
              <S.MenuItemWrapper
                href='/mission/create'
                onClick={handleLinkClick}
              >
                <MadeIcon />
                <S.ItemTitle>만들기</S.ItemTitle>
              </S.MenuItemWrapper>
            </>
          ) : (
            <S.MenuItemWrapper href='/mission/list' onClick={handleLinkClick}>
              <QuestionIcon />
              <S.ItemTitle>문제</S.ItemTitle>
            </S.MenuItemWrapper>
          )}
          <S.MenuItemWrapper href='/shop' onClick={handleLinkClick}>
            <ShopIcon />
            <S.ItemTitle>상점</S.ItemTitle>
          </S.MenuItemWrapper>
          <S.MenuItemWrapper href='/ranking' onClick={handleLinkClick}>
            <RankingIcon />
            <S.ItemTitle>랭킹</S.ItemTitle>
          </S.MenuItemWrapper>
        </S.MenuNav>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

export default Header;
