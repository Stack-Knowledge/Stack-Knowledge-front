'use client';

import { MissionDetailInput } from 'common';
import { MissionDetailModal } from 'client/components';
import { Timer } from 'client/components';
import * as S from './style';
import { useGetMissionDetail } from 'api/common';
import { useEffect, useRef, useState } from 'react';
import { usePostSolve } from 'api/client';
import { useRouter } from 'next/navigation';

interface MissionDetailProps {
  missionId: string;
}

const MissionDetailPage: React.FC<MissionDetailProps> = ({ missionId }) => {
  const { push } = useRouter();
  const dialog = useRef<HTMLDialogElement>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const { data } = useGetMissionDetail(missionId);

  const onSuccessFunc = () => {
    if (inputValue) {
      mutate({
        solvation: inputValue,
      });
      push(`/`);
      alert('문제를 제출하였습니다. !');
    } else {
      alert('답변 제출에 실패하였습니다.');
    }
  };

  const { mutate } = usePostSolve(onSuccessFunc, missionId);

  useEffect(() => {
    if (data) {
      setHours(Math.floor(data.timeLimit / 3600));
      setMinutes(Math.floor((data.timeLimit % 3600) / 60));
      onSuccessFunc();
    }
  }, [data]);

  return (
    <S.PageWrapper>
      {data && (
        <>
          <div>
            <S.TimerWrapper>
              <Timer hour={hours} minute={minutes} />
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
              onConfirm={onSuccessFunc}
              onCancel={() => dialog.current?.close()}
            />
          </S.ModalWrapper>
        </>
      )}
    </S.PageWrapper>
  );
};

export default MissionDetailPage;
