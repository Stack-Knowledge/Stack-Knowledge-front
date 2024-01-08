'use client';

import { useRef, useState } from 'react';

import { XIcon, BarIcon } from 'admin/assets';

import { useGetApprovedList, usePatchApproved } from 'api/admin';

import { ApproveModalButton } from 'admin/components';

import { MainPage } from 'common';

import * as S from './style';

interface MainPageProps {
  userId: string;
}

const MainPageComponent: React.FC<MainPageProps> = ({ userId }) => {
  const { mutate, isSuccess } = usePatchApproved(userId);
  const { data } = useGetApprovedList();

  if (isSuccess) {
    alert('성공');
  } else {
    console.log('실패');
  }

  const dialog = useRef<HTMLDialogElement>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModalOpen = () => {
    dialog.current?.showModal();
    setIsOpen(true);
  };

  const formatDate = (isoDate: string) => {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    } as Intl.DateTimeFormatOptions;
    const formattedDate = new Date(isoDate).toLocaleDateString(
      'en-US',
      options
    );

    const [month, day, year] = formattedDate.split('/');

    return `${year}.${month}.${day}`;
  };

  return (
    <>
      <S.Modal ref={dialog} isOpen={isOpen}>
        <form method='dialog'>
          <S.ModalButton onClick={() => setIsOpen(false)}>
            <XIcon />
          </S.ModalButton>
          <S.ModalWrapper>
            {data &&
              data.map((item, index) => (
                <S.ModalItem key={index}>
                  <S.TitleContainer>
                    <S.Title>{item.name}</S.Title>
                    <BarIcon />
                    <S.Title>{formatDate(item.createdAt)}</S.Title>
                  </S.TitleContainer>
                  <S.ApprovedContainer>
                    <S.ApprovedButton
                      onClick={() => mutate({ approveStatus: 'APPROVED' })}
                    >
                      수락
                    </S.ApprovedButton>
                    <S.ApprovedButton
                      onClick={() => mutate({ approveStatus: 'REJECT' })}
                    >
                      거절
                    </S.ApprovedButton>
                  </S.ApprovedContainer>
                </S.ModalItem>
              ))}
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
