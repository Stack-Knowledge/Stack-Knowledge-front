'use client';

import { useRef } from 'react';

import { ApproveModalButton } from 'admin/components';

import { MainPage } from 'common';

import * as S from './style';

const MainPageComponent = () => {
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <>
      <S.Modal ref={dialog} />
      <S.Wrapper onClick={() => dialog.current?.showModal()}>
        <ApproveModalButton />
      </S.Wrapper>
      <MainPage isClient={false} />
    </>
  );
};

export default MainPageComponent;
