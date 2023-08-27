'use client';

import * as S from './style';

const Timer = () => (
  <S.Wrapper>
    <S.TimerWrapper>
      <S.Input maxLength={2} placeholder='00' />
      <S.Collon>:</S.Collon>
      <S.Input maxLength={2} placeholder='00' />
    </S.TimerWrapper>
    <S.NoticeText>* 문제는 12:30 ~ 19:30분까지 남아있습니다.</S.NoticeText>
  </S.Wrapper>
);

export default Timer;
