'use client';

import * as S from './style';
import { RankingItem } from 'common/components';

import { useGetRankingList } from 'api/common';

const RankingList = () => {
  const { data } = useGetRankingList();

  return (
    <S.RankingListWrapper>
      <div>
        <S.RankingText>랭킹</S.RankingText>
        <S.ItemListWrapper>
          {data?.map((item, index) => (
            <div key={item.id + index}>
              <RankingItem item={item} ranking={index + 1} />
              {index !== data.length - 1 && <S.Line />}
            </div>
          ))}
        </S.ItemListWrapper>
      </div>
    </S.RankingListWrapper>
  );
};

export default RankingList;
