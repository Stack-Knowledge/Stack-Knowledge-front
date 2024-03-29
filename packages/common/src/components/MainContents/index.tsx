'use client';

import { useRouter } from 'next/navigation';

import { TaskCard, RankingCard } from 'common/components';

import { useGetRankingList, useGetMissionList } from 'api/common';

import * as S from './style';

interface MainContentsProps {
  isClient: boolean;
}

const MainContents: React.FC<MainContentsProps> = ({ isClient }) => {
  const { push } = useRouter();

  const { data: rankingList } = useGetRankingList();
  const { data: missionList } = useGetMissionList();

  const onCardClick = (missionId: string) => {
    if (isClient) push(`/mission/resolve/${missionId}`);
  };

  return (
    <>
      <S.MissionTextContainer>
        <S.MissionText>문제</S.MissionText>
      </S.MissionTextContainer>
      <S.ContentWrapper>
        <S.Contents>
          {missionList &&
            missionList.map((mission, index) => (
              <TaskCard
                userName={mission.user.name}
                taskTitle={mission.title}
                miledge={mission.point}
                key={mission.id + index}
                onClick={() => onCardClick(mission.id)}
              />
            ))}
        </S.Contents>
        <S.Contents>
          {rankingList &&
            rankingList.map((ranking, index) => (
              <RankingCard
                user={ranking.user}
                cumulatePoint={ranking.cumulatePoint}
                rank={index + 1}
                id={ranking.id}
                key={ranking.id + index}
              />
            ))}
        </S.Contents>
      </S.ContentWrapper>
    </>
  );
};

export default MainContents;
