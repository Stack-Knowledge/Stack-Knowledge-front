'use client';

import * as S from './style';
import { Dispatch, SetStateAction, useState } from 'react';

interface TimerProps {
  time: number;
  setTime: Dispatch<SetStateAction<number>>;
}

const Timer: React.FC<TimerProps> = ({ time, setTime }) => {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const onMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMinute = parseInt(e.target.value) * 60;
    setMinute(newMinute);
    setTime(newMinute + second);
    console.log(newMinute + second);
  };

  const onSecondChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSecond = parseInt(e.target.value);
    setSecond(newSecond);
    setTime(minute + newSecond);
    console.log(minute + newSecond);
  };

  return (
    <S.Wrapper>
      <S.TimerWrapper>
        <S.Input maxLength={2} placeholder='00' onChange={onMinuteChange} />
        <S.Collon>:</S.Collon>
        <S.Input maxLength={2} placeholder='00' onChange={onSecondChange} />
      </S.TimerWrapper>
      <S.NoticeText>* 문제는 12:30 ~ 19:30분까지 풀 수 있습니다.</S.NoticeText>
    </S.Wrapper>
  );
};

export default Timer;
