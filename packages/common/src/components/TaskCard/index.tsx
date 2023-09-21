'use client';

import * as S from './style';

import { slicePoint } from 'common/utils';

interface TaskCardProps {
  userName: string;
  taskTitle: string;
  miledge: number;
  isShadow?: boolean;
  onClick: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  userName,
  taskTitle,
  miledge,
  isShadow = false,
  onClick,
}) => (
  <S.CardWrapper onClick={onClick} isShadow={isShadow}>
    <S.UserName>{userName}</S.UserName>
    <S.TaskTitle>{taskTitle}</S.TaskTitle>
    <S.MiledgeWrapper>
      <S.Mildege>{slicePoint(miledge)}</S.Mildege>
      <S.MildegeUnit>M</S.MildegeUnit>
    </S.MiledgeWrapper>
  </S.CardWrapper>
);

export default TaskCard;
