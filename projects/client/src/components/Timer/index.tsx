'use client';

import * as S from './style';

interface TimerProps {
  hour: string;
  minute: string;
}

const Timer: React.FC<TimerProps> = ({ hour, minute }) => (
  <S.Wrapper>
    <S.TimerWrapper>
      <S.Timer>{hour}</S.Timer>
      <S.Collon>:</S.Collon>
      <S.Timer>{minute}</S.Timer>
    </S.TimerWrapper>
    <S.NoticeText>* 문제는 12:30 ~ 19:30분까지 풀 수 있습니다.</S.NoticeText>
  </S.Wrapper>
);

export default Timer;
