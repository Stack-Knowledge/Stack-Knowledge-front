'use client';

import * as S from './style';

import { RankingList } from 'common';

import { RankingHeader } from 'client/components';

import { useGetStudentInfo } from 'api/client';

const RankingPage = () => {
  const { data } = useGetStudentInfo();

  return (
    <S.RankingWrapper>
      {data && <RankingHeader data={data} ranking={data.cumulatePoint} />}
      <RankingList />
    </S.RankingWrapper>
  );
};

export default RankingPage;
