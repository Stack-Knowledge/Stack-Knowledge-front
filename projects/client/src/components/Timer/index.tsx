import * as S from './style';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface TimerProps {
  minute: number;
  second: number;
  setMinutes: Dispatch<SetStateAction<number>>;
  setSeconds: Dispatch<SetStateAction<number>>;
}

const Timer: React.FC<TimerProps> = ({
  minute,
  second,
  setMinutes,
  setSeconds,
}) => {
  const { push } = useRouter();

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (second > 0) {
        setSeconds((prevSecond) => prevSecond - 1);
      } else if (minute > 0) {
        setMinutes((prevMinute) => prevMinute - 1);
        setSeconds(59);
      } else {
        clearInterval(intervalId);
        alert('시간이 다 되었습니다.');
        push('/');
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [minute, second, push]);

  return (
    <S.Wrapper>
      <S.TimerWrapper>
        <S.Timer>{minute.toString().padStart(2, '0')}</S.Timer>
        <S.Collon>:</S.Collon>
        <S.Timer>{second.toString().padStart(2, '0')}</S.Timer>
      </S.TimerWrapper>
      <S.NoticeText>* 문제는 12:30 ~ 19:30분까지 풀 수 있습니다.</S.NoticeText>
    </S.Wrapper>
  );
};

export default Timer;
