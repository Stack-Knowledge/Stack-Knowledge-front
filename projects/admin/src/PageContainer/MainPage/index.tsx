'use client';

import { useRef, useState } from 'react';

import { XIcon } from 'admin/assets';
import { ApproveModalButton } from 'admin/components';

import { MainPage } from 'common';

import * as S from './style';

const MainPageComponent = () => {
  const dialog = useRef<HTMLDialogElement>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModalOpen = () => {
    dialog.current?.showModal();
    setIsOpen(true);
  };

  return (
    <>
      <S.Modal ref={dialog} isOpen={isOpen}>
        <form method='dialog'>
          <S.ModalButton onClick={() => setIsOpen(false)}>
            <XIcon />
          </S.ModalButton>
        </form>
      </S.Modal>
      <S.Wrapper onClick={handleModalOpen}>
        <ApproveModalButton />
      </S.Wrapper>
      <MainPage isClient={false} />
    </>
  );
};

export default MainPageComponent;
