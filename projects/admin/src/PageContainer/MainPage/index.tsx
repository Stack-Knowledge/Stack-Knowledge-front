'use client';

import { useRef, useState } from 'react';

import { CapIcon, XIcon } from 'admin/assets';
import { ModalItem, ApproveModalButton } from 'admin/components';

import { useGetApprovedList } from 'api/admin';

import { MainPage } from 'common';

import * as S from './style';

const MainPageComponent = () => {
  const { data } = useGetApprovedList();

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
          <S.ModalWrapper>
            {data && data.length > 0 ? (
              data.map((item, index) => (
                <ModalItem key={index} teacherItem={item} />
              ))
            ) : (
              <S.ApprovedNone>
                <CapIcon />
                <span>대기중인 선생님이 없습니다..</span>
              </S.ApprovedNone>
            )}
          </S.ModalWrapper>
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
