'use client';

import * as S from './style';

import { RankingList } from 'common';

import { RankingHeader } from 'client/components';

import { useGetStudentInfo } from 'api/client';
import { useGetRankingList } from 'api/common';

const RankingPage = () => {
  const { data: studentInfo } = useGetStudentInfo();
  const { data: rankingList } = useGetRankingList();

  if (!studentInfo || !rankingList) {
    return null;
  }

  const userRanking =
    rankingList.findIndex((item) => item.id === studentInfo.user.id) + 2;

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
