'use client';

import * as S from './style';

import { TaskCard, RankingCard } from 'common/components';

import { useGetRankingList, useGetMissionList } from 'api/common';

import { useRouter } from 'next/navigation';

const Banner = () => {
  const { push } = useRouter();

  const { data: rankingList } = useGetRankingList();
  const { data: missionList } = useGetMissionList();

  const onCardClick = () => {};

  return (
    <>
      <S.MissionText>문제</S.MissionText>
      <S.ContentWrapper>
        <S.Contents>
          {missionList &&
            missionList.map((mission, index) => (
              <TaskCard
                userName={mission.user.name}
                taskTitle={mission.title}
                miledge={mission.point}
                key={mission.id + index}
                onClick={onCardClick}
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

export default Banner;
