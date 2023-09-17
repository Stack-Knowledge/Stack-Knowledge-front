'use client';

import { MissionDetailInput } from 'common';
import { MissionDetailModal } from 'client/components';

import { Timer } from 'client/components';
import * as S from './style';
import { useRef } from 'react';

const timerData = {
  hour: '10',
  minute: '20',
};

const sectionContents = [
  '법흥왕이 세운 업적을 3가지 이상 서술 하세요.',
  '이승제 ㅎㅇ',
  'ㅁㄴㅇㅁㄴㅇㅁㄴㅇㄴㅁㅇ',
];

const MissionDetailPage = () => {
  const dialog = useRef<HTMLDialogElement>(null);
  return (
    <S.PageWrapper>
      <div>
        <S.TimerWrapper>
          <Timer hour={timerData.hour} minute={timerData.minute} />
        </S.TimerWrapper>
        <S.MissionWrapper>
          <S.SectionWrapper>
            <S.Section>[문제]</S.Section>
            <S.Section>{sectionContents[0]}</S.Section>
          </S.SectionWrapper>
          <MissionDetailInput
            role='client'
            onClick={() => dialog.current?.showModal()}
          />
        </S.MissionWrapper>
      </div>
      <S.ModalWrapper ref={dialog}>
        <MissionDetailModal />
      </S.ModalWrapper>
    </S.PageWrapper>
  );
};

export default MissionDetailPage;
