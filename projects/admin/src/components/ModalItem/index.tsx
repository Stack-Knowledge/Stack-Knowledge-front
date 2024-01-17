'use client';

import { BarIcon } from 'admin/assets';

import { usePatchApprovalStatus } from 'api/admin';

import * as S from './style';

import type { approvedType } from 'types';

interface ModalItemProps {
  teacherItem: approvedType;
  onSuccessApproved: (isAccepted: boolean) => void;
}

const ModalItem: React.FC<ModalItemProps> = ({
  teacherItem,
  onSuccessApproved,
}) => {
  const { userId, name, createdAt } = teacherItem;
  const { mutate } = usePatchApprovalStatus(userId);

  const formatDate = (isoDate: string) =>
    isoDate.slice(0, 10).replaceAll('-', '.');

  return (
    <S.ModalItem id={userId}>
      <S.TitleContainer>
        <S.Title>{name}</S.Title>
        <BarIcon />
        <S.Title>{formatDate(createdAt)}</S.Title>
      </S.TitleContainer>
      <S.ApprovedContainer>
        <S.ApprovedButton
          onClick={() => {
            mutate({ approveStatus: 'APPROVED' });
            onSuccessApproved(true);
          }}
        >
          수락
        </S.ApprovedButton>
        <S.ApprovedButton
          onClick={() => {
            mutate({ approveStatus: 'REJECT' });
            onSuccessApproved(false);
          }}
        >
          거절
        </S.ApprovedButton>
      </S.ApprovedContainer>
    </S.ModalItem>
  );
};

export default ModalItem;
