'use client';

import * as S from './style';

import { MissionCarousel } from 'admin/components';

const ScoringPage = () => (
  <S.PageWrapper>
    <S.ScoringText>채점하기</S.ScoringText>
    <MissionCarousel />
  </S.PageWrapper>
);

export default ScoringPage;
