'use client';

import * as S from './style';
import { Dispatch, SetStateAction } from 'react';

interface TimerProps {
  minute: number;
  setMinute: Dispatch<SetStateAction<number>>;
  second: number;
  setSecond: Dispatch<SetStateAction<number>>;
}

const Timer: React.FC<TimerProps> = ({
  minute,
  setMinute,
  second,
  setSecond,
}) => (
  <S.Wrapper>
    <S.TimerWrapper>
      <S.Input
        maxLength={2}
        value={minute}
        onChange={(e) =>
          e.target.value ? setMinute(parseInt(e.target.value)) : setMinute(0)
        }
      />
      <S.Collon>:</S.Collon>
      <S.Input
        maxLength={2}
        value={second}
        onChange={(e) =>
          e.target.value ? setSecond(parseInt(e.target.value)) : setSecond(0)
        }
      />
    </S.TimerWrapper>
    <S.NoticeText>* 문제는 12:30 ~ 19:30분까지 풀 수 있습니다.</S.NoticeText>
  </S.Wrapper>
);

export default Timer;
