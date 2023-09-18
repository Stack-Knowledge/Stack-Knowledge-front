'use client';

import { MissionDetailInput } from 'common';

import { Timer, TitleInput } from 'admin/components';
import * as S from './style';

const CreatePage = () => (
  <S.PageWrapper>
    <div>
      <S.TimerWrapper>
        <Timer />
      </S.TimerWrapper>
      <S.Section>[제목]</S.Section>
      <TitleInput />
      <S.MissionWrapper>
        <S.Section>[문제]</S.Section>
        <MissionDetailInput role='admin' />
      </S.MissionWrapper>
    </div>
  </S.PageWrapper>
);

export default CreatePage;
