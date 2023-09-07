'use client';

import * as S from './style';

import { RankingItem } from '../../components';

import { RankingPropsType } from 'types';

interface RankingListProps {
  list: RankingPropsType[];
}

const RankingList: React.FC<RankingListProps> = ({ list }) => (
  <S.RankingListWrapper>
    {list.map((item, index) => (
      <>
        <RankingItem key={item.id} item={item} ranking={index + 1} />
        <S.Line />
      </>
    ))}
  </S.RankingListWrapper>
);

export default RankingList;
