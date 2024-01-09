'use client';

import { usePatchApproved } from 'api/admin';
import * as S from './style';
import { BarIcon } from 'admin/assets';
import type { approvedType } from 'types';

interface ModalItemProps {
  teacherItem: approvedType;
}

const ModalItem: React.FC<ModalItemProps> = ({ teacherItem }) => {
  const { userId, name, createdAt } = teacherItem;
  const { mutate } = usePatchApproved(userId);

  console.log(teacherItem);

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
