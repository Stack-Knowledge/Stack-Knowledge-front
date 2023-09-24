'use client';

import * as S from './style';

import { MissionCarousel } from 'client/components';

const MissionListPage = () => (
  <S.PageWrapper>
    <S.ScoringText>문제</S.ScoringText>
    <MissionCarousel />
  </S.PageWrapper>
);

export default MissionListPage;
