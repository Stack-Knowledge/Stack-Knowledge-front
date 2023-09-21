'use client';

import * as S from './style';

import { MissionCarousel } from 'common';

const ScoringPage = () => (
  <S.PageWrapper>
    <S.ScoringText>채점하기</S.ScoringText>
    <MissionCarousel role='admin' />
  </S.PageWrapper>
);

export default ScoringPage;
