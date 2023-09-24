'use client';

import { MissionDetailInput } from 'common';

import { MissionDetailModal } from 'client/components';
import { Timer } from 'client/components';
import * as S from './style';

import { useRef, useState } from 'react';
import { usePostSolve } from '../../../../../packages/api/client/src/hooks/solve/usePostSolve';
import { useRouter } from 'next/router';

const { push } = useRouter();

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

  const [inputValue, setInputValue] = useState<string>('');

  const onSuccessFunc = () => {
    push('/');
    alert('문제가 등록되었습니다 !');
  };

  const { mutate } = usePostSolve(onSuccessFunc, solveId, missionId);

  const handleSubmit = () => {
    if (inputValue)
      mutate({
        solvation: inputValue,
      });
    else alert('답변 제출에 실패하였습니다.');
  };

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
            inputValue={inputValue}
            setInputValue={setInputValue}
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
