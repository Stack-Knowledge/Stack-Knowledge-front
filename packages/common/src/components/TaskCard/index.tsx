'use client';

import * as S from './style';

import { slicePoint } from '../../utils';

interface RankingItemProps {
  userName: string;
  taskTitle: string;
  miledge: number;
  isShadow?: boolean;
}

const RankingItem: React.FC<RankingItemProps> = ({
  userName,
  taskTitle,
  miledge,
  isShadow = false,
}) => (
  <S.CardWrapper isShadow={isShadow}>
    <S.UserName>{userName}</S.UserName>
    <S.TaskTitle>{taskTitle}</S.TaskTitle>
    <S.MiledgeWrapper>
      <S.Mildege>{slicePoint(miledge)}</S.Mildege>
      <S.MildegeUnit>M</S.MildegeUnit>
    </S.MiledgeWrapper>
  </S.CardWrapper>
);

export default RankingItem;