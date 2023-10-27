'use client';

import { useGetScoringList } from 'api/admin';
import * as S from './style';

import { MissionCarousel } from 'admin/components';

const ScoringPage = () => {
  const { data } = useGetScoringList();

  return (
    <S.PageWrapper>
      <S.ScoringText>채점하기</S.ScoringText>
      {data?.length > 0 ? (
        <MissionCarousel />
      ) : (
        <h1>채점할 문제가 없습니다...</h1>
      )}
    </S.PageWrapper>
  );
};

export default ScoringPage;
