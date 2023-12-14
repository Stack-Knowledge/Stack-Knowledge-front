'use client';

import { MissionCarousel } from 'client/components';

import { useGetMissionList } from 'api/common';

import * as S from './style';

const MissionListPage = () => {
  const { data } = useGetMissionList();

  return (
    <S.PageWrapper>
      <S.ScoringTextContainer>
        <S.ScoringText>문제</S.ScoringText>
      </S.ScoringTextContainer>
      {data?.length > 0 ? <MissionCarousel /> : <h1>문제가 없습니다...</h1>}
    </S.PageWrapper>
  );
};

export default MissionListPage;
