'use client';

import { MissionDetailInput } from 'common';

import { Timer, TitleInput } from 'admin/components';
import * as S from './style';

import { usePostMission } from 'api/admin';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

const CreatePage = () => {
  const [titleValue, setTitleValue] = useState<string>('');
  const [detailValue, setDetailValue] = useState<string>('');
  const [time, setTime] = useState<number>(0);

  const { push } = useRouter();

  const { mutate, isSuccess } = usePostMission();

  const handleSubmit = () => {
    console.log(time);
    if (titleValue && detailValue && time)
      mutate({ title: titleValue, content: detailValue, timeLimit: time });
    else alert('똑바로 다 적어라 ㅋㅋ');
  };

  if (isSuccess) {
    push('/');
    alert('문제가 등록되었습니다 !');
  }

  return (
    <S.PageWrapper>
      <div>
        <S.TimerWrapper>
          <Timer time={time} setTime={setTime} />
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
