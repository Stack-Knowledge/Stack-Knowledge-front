'use client';

import { MissionDetailInput } from 'common';

import { Timer } from 'client/components';
import * as S from './style';

const MissionDetailPage = () => (
  <S.PageWrapper>
    <div>
      <S.TimerWrapper>
        <Timer hour='10' minute='20' />
      </S.TimerWrapper>
      <S.MissionWrapper>
        <S.Section>[문제]</S.Section>
        <MissionDetailInput role='client' />
      </S.MissionWrapper>
    </div>
  </S.PageWrapper>
);

export default MissionDetailPage;