'use client';

import { usePathname } from 'next/navigation';

import {
  HomeIcon,
  LogoIcon,
  QuestionIcon,
  RankingIcon,
  ShopIcon,
  MadeIcon,
} from 'common/assets';

import * as S from './style';

interface HeaderProps {
  role: 'admin' | 'client';
}

const Header: React.FC<HeaderProps> = ({ role }) => {
  const pathname = usePathname();

  if (pathname === '/auth/login') return <></>;

  const handleLinkClick = (e) => {
    if (pathname.includes('/mission/resolve')) {
      e.preventDefault();
    }
  };

  const getIsActive = (targetPath: string) => pathname === targetPath;

  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.LogoContainer href='/' onClick={handleLinkClick}>
          <LogoIcon />
          <S.Title>Stack Knowledge</S.Title>
        </S.LogoContainer>
        <S.MenuNav role={role}>
          <S.MenuStrokeItemWrapper
            href='/'
            data-isactive={getIsActive('/')}
            onClick={handleLinkClick}
          >
            <HomeIcon />
            <S.ItemTitle>홈</S.ItemTitle>
          </S.MenuStrokeItemWrapper>

          {role === 'admin' ? (
            <>
              <S.MenuStrokeItemWrapper
                href='/mission/scoring'
                data-isactive={getIsActive('/mission/scoring')}
                onClick={handleLinkClick}
              >
                <QuestionIcon />
                <S.ItemTitle>채점하기</S.ItemTitle>
              </S.MenuStrokeItemWrapper>

              <S.MenuFillItemWrapper
                href='/mission/create'
                data-isactive={getIsActive('/mission/create')}
                onClick={handleLinkClick}
              >
                <MadeIcon />
                <S.ItemTitle>만들기</S.ItemTitle>
              </S.MenuFillItemWrapper>
            </>
          ) : (
            <>
              <S.MenuStrokeItemWrapper
                href='/mission/list'
                data-isactive={getIsActive('/mission/list')}
                onClick={handleLinkClick}
              >
                <QuestionIcon />
                <S.ItemTitle>문제</S.ItemTitle>
              </S.MenuStrokeItemWrapper>
            </>
          )}
          <S.MenuFillItemWrapper
            href='/shop'
            data-isactive={getIsActive('/shop')}
            onClick={handleLinkClick}
          >
            <ShopIcon />
            <S.ItemTitle>상점</S.ItemTitle>
          </S.MenuFillItemWrapper>

          <S.MenuFillItemWrapper
            href='/ranking'
            data-isactive={getIsActive('/ranking')}
            onClick={handleLinkClick}
          >
            <RankingIcon />
            <S.ItemTitle>랭킹</S.ItemTitle>
          </S.MenuFillItemWrapper>
        </S.MenuNav>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

export default Header;
