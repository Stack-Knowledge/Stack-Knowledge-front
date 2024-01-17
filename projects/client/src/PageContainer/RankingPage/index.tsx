'use client';

import { RankingHeader } from 'client/components';

import { useGetStudentInfo } from 'api/client';
import { useGetRankingList } from 'api/common';

import { RankingList } from 'common';

import * as S from './style';

const RankingPage = () => {
  const { data: studentInfo } = useGetStudentInfo();
  const { data: rankingList } = useGetRankingList();

  if (!studentInfo || !rankingList) {
    return null;
  }

  const userRanking =
    rankingList.findIndex((item) => item.id === studentInfo.id) + 1;

  return (
    <S.RankingWrapper>
      {studentInfo && (
        <RankingHeader data={studentInfo} ranking={userRanking} />
      )}
      <RankingList />
    </S.RankingWrapper>
  );
};

export default RankingPage;
