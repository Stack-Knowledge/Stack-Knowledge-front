'use client';

import * as S from './style';

import {
  HomeIcon,
  LogoIcon,
  QuestionIcon,
  RankingIcon,
  ShopIcon,
  MadeIcon,
} from '../../assets';

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
        <S.MenuItemWrapper>
          <HomeIcon />
          <S.ItemTitle>홈</S.ItemTitle>
        </S.MenuItemWrapper>
        {role === 'client' ? (
          <S.MenuItemWrapper>
            <QuestionIcon />
            <S.ItemTitle>문제</S.ItemTitle>
          </S.MenuItemWrapper>
        ) : role === 'admin' ? (
          <>
            <S.MenuItemWrapper>
              <QuestionIcon />
              <S.ItemTitle>채점하기</S.ItemTitle>
            </S.MenuItemWrapper>
            <S.MenuItemWrapper>
              <MadeIcon />
              <S.ItemTitle>만들기</S.ItemTitle>
            </S.MenuItemWrapper>
          </>
        ) : null}

        <S.MenuItemWrapper>
          <ShopIcon />
          <S.ItemTitle>상점</S.ItemTitle>
        </S.MenuItemWrapper>
        <S.MenuItemWrapper>
          <RankingIcon />
          <S.ItemTitle>랭킹</S.ItemTitle>
        </S.MenuItemWrapper>
      </S.MenuNav>
    </S.HeaderContainer>
  </S.HeaderWrapper>
);

export default Header;
