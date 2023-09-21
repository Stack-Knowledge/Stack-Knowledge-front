'use client';

import { Dispatch, SetStateAction } from 'react';

import * as S from './style';

interface TimerProps {
  time: number;
  setTime: Dispatch<SetStateAction<number>>;
}

const Timer: React.FC<TimerProps> = ({ time, setTime }) => {
  let minute = 0;
  let second = 0;

  const onMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    minute = parseInt(e.target.value) * 60;
    setTime(minute + second);
  };

  const onSecondCahnge = (e: React.ChangeEvent<HTMLInputElement>) => {
    second = parseInt(e.target.value);
    setTime(minute + second);
  };

  return (
    <S.Wrapper>
      <S.TimerWrapper>
        <S.Input maxLength={2} placeholder='00' onChange={onMinuteChange} />
        <S.Collon>:</S.Collon>
        <S.Input maxLength={2} placeholder='00' onChange={onSecondCahnge} />
      </S.TimerWrapper>
      <S.NoticeText>* 문제는 12:30 ~ 19:30분까지 풀 수 있습니다.</S.NoticeText>
    </S.Wrapper>
  );
};

export default Timer;
