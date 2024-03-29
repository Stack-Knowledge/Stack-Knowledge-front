'use client';

import { useRef } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import {
  HomeIcon,
  LogoIcon,
  QuestionIcon,
  RankingIcon,
  ShopIcon,
  MadeIcon,
} from 'common/assets';
import { Modal } from 'common/components';
import { toast } from 'react-toastify';

import { useDeleteLogout } from 'api/common';

import * as S from './style';

interface HeaderProps {
  role: 'admin' | 'client';
}

const Header: React.FC<HeaderProps> = ({ role }) => {
  const pathname = usePathname();
  const dialog = useRef<HTMLDialogElement>(null);

  const { push } = useRouter();

  const { mutate, isSuccess, isError } = useDeleteLogout();

  if (pathname === '/auth/login') return <></>;

  const handleLinkClick = (e) => {
    if (pathname.includes('/mission/resolve')) {
      e.preventDefault();
    }
  };

  const getIsActive = (targetPath: string) => pathname === targetPath;

  const onClick = () => {
    mutate();
  };

  if (isSuccess) {
    ['access_token', 'refresh_token'].forEach((token) =>
      localStorage.removeItem(token)
    );
    push('/auth/login');
    toast.success('로그아웃 되었습니다.');
  }

  if (isError) toast.error('로그아웃에 실패했습니다.');

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
          <S.LogoutTitle onClick={() => dialog.current?.showModal()}>
            로그아웃
          </S.LogoutTitle>
        </S.MenuNav>
      </S.HeaderContainer>
      <S.ModalWrapper ref={dialog}>
        <Modal onClick={onClick} content='로그아웃 하시겠습니까?' />
      </S.ModalWrapper>
    </S.HeaderWrapper>
  );
};

export default Header;
