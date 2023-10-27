'use client';

import { MissionDetailInput } from 'common';

import { Timer, TitleInput } from 'admin/components';
import * as S from './style';

import { usePostMission } from 'api/admin';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { toast } from 'react-toastify';

const CreatePage = () => {
  const [titleValue, setTitleValue] = useState<string>('');
  const [detailValue, setDetailValue] = useState<string>('');
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const { push } = useRouter();

  const { mutate, isSuccess } = usePostMission();

  const handleSubmit = () => {
    if (titleValue && detailValue && minute + second !== 0)
      mutate({
        title: titleValue,
        content: detailValue,
        timeLimit: minute * 60 + second,
      });
    else toast.error('작성되지 않은 빈칸이 있습니다.');
  };

  if (isSuccess) {
    push('/');
    toast.success('문제가 성공적으로 등록되었습니다.');
  }

  return (
    <S.PageWrapper>
      <div>
        <S.TimerWrapper>
          <Timer
            minute={minute}
            setMinute={setMinute}
            second={second}
            setSecond={setSecond}
          />
        </S.TimerWrapper>
        <S.Section>[제목]</S.Section>
        <TitleInput inputValue={titleValue} setInputValue={setTitleValue} />
        <S.MissionWrapper>
          <S.Section>[문제]</S.Section>
          <MissionDetailInput
            role='admin'
            onClick={handleSubmit}
            inputValue={detailValue}
            setInputValue={setDetailValue}
          />
        </S.MissionWrapper>
      </div>
    </S.PageWrapper>
  );
};

export default CreatePage;
