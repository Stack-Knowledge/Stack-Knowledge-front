'use client';

import { Banner, MainContents } from 'common/components';

import * as S from './style';

interface MainPageProps {
  isClient: boolean;
}

const MainPage: React.FC<MainPageProps> = ({ isClient }) => (
  <S.MainWrapper>
    <Banner />
    <S.MissionAlertText>
      * 문제는 12:30 ~ 19:30분까지 풀 수 있습니다.
    </S.MissionAlertText>
    <MainContents isClient={isClient} />
  </S.MainWrapper>
);

export default MainPage;
