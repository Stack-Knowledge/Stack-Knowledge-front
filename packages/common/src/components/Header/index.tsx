'use client';

import * as S from './style';
import Link from 'next/link';

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

const Header: React.FC<HeaderProps> = ({ role }) => (
  <S.HeaderWrapper>
    <S.HeaderContainer>
      <S.LogoContainer>
        <LogoIcon />
        <S.Title>Stack Knowledge</S.Title>
      </S.LogoContainer>
      <S.MenuNav role={role}>
        <S.MenuItemWrapper href='/'>
          <HomeIcon />
          <S.ItemTitle>홈</S.ItemTitle>
        </S.MenuItemWrapper>
        {role === 'admin' ? (
          <>
            <S.MenuItemWrapper href='#'>
              <QuestionIcon />
              <S.ItemTitle>채점하기</S.ItemTitle>
            </S.MenuItemWrapper>
            <S.MenuItemWrapper href='#'>
              <MadeIcon />
              <S.ItemTitle>만들기</S.ItemTitle>
            </S.MenuItemWrapper>
          </>
        ) : (
          <S.MenuItemWrapper href='#'>
            <QuestionIcon />
            <S.ItemTitle>문제</S.ItemTitle>
          </S.MenuItemWrapper>
        )}
        <S.MenuItemWrapper href='#'>
          <ShopIcon />
          <S.ItemTitle>상점</S.ItemTitle>
        </S.MenuItemWrapper>
        <S.MenuItemWrapper href='#'>
          <RankingIcon />
          <S.ItemTitle>랭킹</S.ItemTitle>
        </S.MenuItemWrapper>
      </S.MenuNav>
    </S.HeaderContainer>
  </S.HeaderWrapper>
);

export default Header;
