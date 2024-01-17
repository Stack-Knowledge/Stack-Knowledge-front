'use client';

import { useRef, useState } from 'react';

import { toast } from 'react-toastify';

import { CapIcon, XIcon } from 'admin/assets';
import { ModalItem, ApproveModalButton } from 'admin/components';

import { useGetApprovedList } from 'api/admin';

import { MainPage } from 'common';

import * as S from './style';

const MainPageComponent = () => {
  const { data, refetch } = useGetApprovedList();

  const dialog = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModalOpen = () => {
    dialog.current?.showModal();
    setIsOpen(true);
  };

  const handleSuccessApproved = (isAccepted: boolean) => {
    refetch();
    isAccepted
      ? toast.success('수락되었습니다.')
      : toast.error('거절되었습니다.');
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
              data.map((item) => (
                <ModalItem
                  key={item.userId}
                  teacherItem={item}
                  onSuccessApproved={handleSuccessApproved}
                />
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
