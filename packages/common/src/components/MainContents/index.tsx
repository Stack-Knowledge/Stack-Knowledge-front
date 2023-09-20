'use client';

import * as S from './style';

import { TaskCard, RankingCard } from 'common/components';

import { useGetRankingList } from 'api/common';

const missionList = [
  {
    id: 'new id',
    title: '북학파의 배경',
    point: 1000,
    missionStatus: 'OPENED',
    user: {
      id: 'new id',
      email: 'moondgod@gmail.com',
      name: '미소쌤',
      profileImage: null,
    },
  },
  {
    id: 'new id',
    title: '가방에 동전 넣기',
    point: 10,
    missionStatus: 'OPENED',
    user: {
      id: 'new id',
      email: 'moondgod@gmail.com',
      name: '이정우',
      profileImage: null,
    },
  },
  {
    id: 'new id',
    title: '돈을 굴리는법',
    point: 100000,
    missionStatus: 'OPENED',
    user: {
      id: 'new id',
      email: 'moondgod@gmail.com',
      name: '정찬교',
      profileImage: null,
    },
  },
  {
    id: 'new id',
    title: '아나콘다 길들이기',
    point: 800,
    missionStatus: 'OPENED',
    user: {
      id: 'new id',
      email: 'moondgod@gmail.com',
      name: '박준호',
      profileImage: null,
    },
  },
  {
    id: 'new id',
    title: '머리감기는 아침에',
    point: 80000,
    missionStatus: 'OPENED',
    user: {
      id: 'new id',
      email: 'moondgod@gmail.com',
      name: '하제우',
      profileImage: null,
    },
  },
  {
    id: 'new id',
    title: '호주가 위험해요',
    point: 902000,
    missionStatus: 'OPENED',
    user: {
      id: 'new id',
      email: 'moondgod@gmail.com',
      name: '김경수',
      profileImage: null,
    },
  },
  {
    id: 'new id',
    title: '김치찌개 끓이기',
    point: 500000,
    missionStatus: 'OPENED',
    user: {
      id: 'new id',
      email: 'moondgod@gmail.com',
      name: '채종인',
      profileImage: null,
    },
  },
  {
    id: 'new id',
    title: '게로에서 살아남기',
    point: 8000,
    missionStatus: 'OPENED',
    user: {
      id: 'new id',
      email: 'moondgod@gmail.com',
      name: '김태오',
      profileImage: null,
    },
  },
  {
    id: 'new id',
    title: '부상 당하는법',
    point: 1,
    missionStatus: 'OPENED',
    user: {
      id: 'new id',
      email: 'moondgod@gmail.com',
      name: '안강호',
      profileImage: null,
    },
  },
  {
    id: 'new id',
    title: '외지주 정독하기',
    point: 30,
    missionStatus: 'OPENED',
    user: {
      id: 'new id',
      email: 'moondgod@gmail.com',
      name: '이동욱',
      profileImage: null,
    },
  },
  {
    id: 'new id',
    title: '마이린 미안해',
    point: 92991,
    missionStatus: 'OPENED',
    user: {
      id: 'new id',
      email: 'moondgod@gmail.com',
      name: '박주홍',
      profileImage: null,
    },
  },
];

const Banner = () => {
  const { data } = useGetRankingList();

  return (
    <>
      <S.MissionText>문제</S.MissionText>
      <S.ContentWrapper>
        <S.Contents>
          {missionList.map((mission, index) => (
            <TaskCard
              userName={mission.user.name}
              taskTitle={mission.title}
              miledge={mission.point}
              key={mission.id + index}
            />
          ))}
        </S.Contents>
        <S.Contents>
          {data &&
            data.map((ranking, index) => (
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
