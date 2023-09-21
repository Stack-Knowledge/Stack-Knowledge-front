'use client';

import { RankingList } from 'common';

import { RankingHeader } from 'client/components';
import * as S from './style';

const RankingPage = () => (
  <S.RankingWrapper>
    <div>
      {/* <RankingHeader data={rankingData.data} ranking={rankingData.ranking} /> */}
    </div>
    <RankingList />
  </S.RankingWrapper>
);

export default RankingPage;
