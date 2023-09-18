'use client';

import * as S from './style';
import { RankingItem } from 'common/components';

import { RankingPropsType } from 'types';

interface RankingListProps {
  list: RankingPropsType[];
}

const RankingList: React.FC<RankingListProps> = ({ list }) => (
  <S.RankingListWrapper>
    <div>
      <S.RankingText>랭킹</S.RankingText>
      <S.ItemListWrapper>
        {list.map((item, index) => (
          <>
            <RankingItem key={item.id} item={item} ranking={index + 1} />
            {index !== list.length - 1 && <S.Line />}
          </>
        ))}
      </S.ItemListWrapper>
    </div>
  </S.RankingListWrapper>
);

export default RankingList;
