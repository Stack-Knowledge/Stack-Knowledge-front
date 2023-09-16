import * as S from './style';
import { useEffect, useState } from 'react';

interface TimerProps {
  hour: string;
  minute: string;
}

const Timer: React.FC<TimerProps> = ({ hour, minute }) => {
  const [currentHour, setCurrentHour] = useState(parseInt(hour));
  const [currentMinute, setCurrentMinute] = useState(parseInt(minute));

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentMinute > 0) {
        setCurrentMinute((prevMinute) => prevMinute - 1);
      } else if (currentHour > 0) {
        setCurrentHour((prevHour) => prevHour - 1);
        setCurrentMinute(59);
      }
    }, 600); // 매 분마다 실행

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 해제
  }, [currentHour, currentMinute]);

  return (
    <S.Wrapper>
      <S.TimerWrapper>
        <S.Timer>{currentHour.toString().padStart(2, '0')}</S.Timer>
        <S.Collon>:</S.Collon>
        <S.Timer>{currentMinute.toString().padStart(2, '0')}</S.Timer>
      </S.TimerWrapper>
      <S.NoticeText>* 문제는12:30 ~19:30분까지 풀 수 있습니다.</S.NoticeText>
    </S.Wrapper>
  );
};

export default Timer;
