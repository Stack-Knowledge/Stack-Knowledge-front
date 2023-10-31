'use client';

import { useGetMissionList } from 'api/common';
import * as S from './style';

import { MissionCarousel } from 'client/components';

const MissionListPage = () => {
  const { data } = useGetMissionList();

  return (
    <S.PageWrapper>
      <S.ScoringText>문제</S.ScoringText>
      {data?.length > 0 ? <MissionCarousel /> : <h1>문제가 없습니다...</h1>}
    </S.PageWrapper>
  );
};

export default MissionListPage;
