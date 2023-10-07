'use client';

import * as S from './style';
import { usePathname } from 'next/navigation';
import styled from '@emotion/styled';

import {
  HomeIcon,
  LogoIcon,
  QuestionIcon,
  RankingIcon,
  ShopIcon,
  MadeIcon,
} from 'common/assets';

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
          <S.MenuItemWrapper href='/' isActive={pathname === '/'}>
            <HomeIcon />
            <S.ItemTitle>홈</S.ItemTitle>
          </S.MenuItemWrapper>
          {role === 'admin' ? (
            <>
              <S.MenuItemWrapper
                href='/mission/scoring'
                isActive={pathname === '/mission/scoring'}
              >
                <QuestionIcon />
                <S.ItemTitle>채점하기</S.ItemTitle>
              </S.MenuItemWrapper>
              <S.MenuItemWrapper
                href='/mission/create'
                isActive={pathname === '/mission/create'}
              >
                <MadeIcon />
                <S.ItemTitle>만들기</S.ItemTitle>
              </S.MenuItemWrapper>
            </>
          ) : (
            <S.MenuItemWrapper
              href='/mission/list'
              isActive={pathname === '/mission/list'}
            >
              <QuestionIcon />
              <S.ItemTitle>문제</S.ItemTitle>
            </S.MenuItemWrapper>
          )}
          <S.MenuItemWrapper href='/shop' isActive={pathname === '/shop'}>
            <ShopIcon />
            <S.ItemTitle>상점</S.ItemTitle>
          </S.MenuItemWrapper>
          <S.MenuItemWrapper href='/ranking' isActive={pathname === '/ranking'}>
            <RankingIcon />
            <S.ItemTitle>랭킹</S.ItemTitle>
          </S.MenuItemWrapper>
        </S.MenuNav>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

export default Header;
