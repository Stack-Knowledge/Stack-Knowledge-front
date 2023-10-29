'use client';

import { MissionDetailInput } from 'common';

import { MissionDetailModal } from 'client/components';
import { Timer } from 'client/components';
import * as S from './style';

import { useGetMissionDetail } from 'api/common';
import { usePostSolve } from 'api/client';

import { useEffect, useRef, useState } from 'react';

import { useRouter } from 'next/navigation';

import { toast } from 'react-toastify';

interface MissionDetailProps {
  missionId: string;
}

const MissionDetailPage: React.FC<MissionDetailProps> = ({ missionId }) => {
  const { push } = useRouter();

  const dialog = useRef<HTMLDialogElement>(null);

  const [inputValue, setInputValue] = useState<string>('');

  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);

  const { data } = useGetMissionDetail(missionId);

  const preventClose = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = '';
    mutate({ solvation: '새로고침하여 제출된 사용자입니다.' });
  };

  useEffect(() => {
    toast.error('문제를 푸는 동안에는 다른 페이지로 이동할 수 없습니다.');

    const handleBeforeUnload = () =>
      window.addEventListener('beforeunload', preventClose);
    handleBeforeUnload();

    return () => {
      window.removeEventListener('beforeunload', preventClose);
    };
  }, []);

  useEffect(() => {
    history.pushState(null, location.href);

    window.onpopstate = function () {
      history.go(1);
    };
  }, []);

  const submitSolution = () => {
    mutate({
      solvation: inputValue,
    });
  };

  const { mutate, isSuccess, isError } = usePostSolve(missionId);

  useEffect(() => {
    setMinutes(Math.floor((data?.timeLimit ?? 0) / 60));
    setSeconds((data?.timeLimit ?? 0) % 60);
  }, [data]);

  if (isSuccess) {
    push(`/`);
    toast.success('문제를 제출하였습니다.');
  }

  if (isError) {
    push(`/`);
    toast.error('이미 푼 문제입니다.');
  }

  return (
    <S.PageWrapper>
      {data && (
        <>
          <div>
            <S.TimerWrapper>
              <Timer
                onTimeUp={() => submitSolution()}
                setSeconds={setSeconds}
                setMinutes={setMinutes}
                second={seconds}
                minute={minutes}
              />
            </S.TimerWrapper>
            <S.MissionWrapper>
              <S.SectionWrapper>
                <S.Section>[문제]</S.Section>
                <S.Section>{data.content}</S.Section>
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
            <MissionDetailModal
              onConfirm={submitSolution}
              onCancel={() => dialog.current?.close()}
            />
          </S.ModalWrapper>
        </>
      )}
    </S.PageWrapper>
  );
};

export default MissionDetailPage;
