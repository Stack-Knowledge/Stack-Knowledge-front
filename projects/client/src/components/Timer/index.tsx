import * as S from './style';
import { useEffect, useState } from 'react';

interface TimerProps {
  hour: number;
  minute: number;
}

const Timer: React.FC<TimerProps> = ({ hour, minute }) => {
  const [currentHour, setCurrentHour] = useState(hour);
  const [currentMinute, setCurrentMinute] = useState(minute);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentMinute > 0) {
        setCurrentMinute((prevMinute) => prevMinute - 1);
      } else if (currentHour > 0) {
        setCurrentHour((prevHour) => prevHour - 1);
        setCurrentMinute(59);
      }
    }, 60000);

    return () => clearInterval(intervalId);
  }, [currentHour, currentMinute]);

  return (
    <S.Wrapper>
      <S.TimerWrapper>
        <S.Timer>{currentHour.toString().padStart(2, '0')}</S.Timer>
        <S.Collon>:</S.Collon>
        <S.Timer>{currentMinute.toString().padStart(2, '0')}</S.Timer>
      </S.TimerWrapper>
      <S.NoticeText>* 문제는 12:30 ~ 19:30분까지 풀 수 있습니다.</S.NoticeText>
    </S.Wrapper>
  );
};

export default Timer;
