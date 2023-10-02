'use client';

import * as S from './style';
import { Banner, MainContents } from 'common/components';

interface MainPageProps {
  isClient: boolean;
}

const MainPage: React.FC<MainPageProps> = ({ isClient }) => {
  return (
    <S.MainWrapper>
      <Banner />
      <S.MissionAlertText>
        * 문제는 12:30 ~ 19:30분까지 풀수 있습니다.
      </S.MissionAlertText>
      <MainContents isClient={isClient} />
    </S.MainWrapper>
  );
};

export default MainPage;
