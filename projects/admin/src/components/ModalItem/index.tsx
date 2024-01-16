'use client';

import { BarIcon } from 'admin/assets';

import { usePatchApprovalStatus } from 'api/admin';

import * as S from './style';

import type { approvedType } from 'types';

interface ModalItemProps {
  teacherItem: approvedType;
}

const ModalItem: React.FC<ModalItemProps> = ({
  teacherItem: { userId, name, createdAt },
}) => {
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
        <S.ApprovedButton onClick={() => mutate({ approveStatus: 'APPROVED' })}>
          수락
        </S.ApprovedButton>
        <S.ApprovedButton onClick={() => mutate({ approveStatus: 'REJECT' })}>
          거절
        </S.ApprovedButton>
      </S.ApprovedContainer>
    </S.ModalItem>
  );
};

export default ModalItem;
