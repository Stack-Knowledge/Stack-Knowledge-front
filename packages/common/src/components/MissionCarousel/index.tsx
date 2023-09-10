'use client';

import * as S from './style';

import { VectorIcon } from 'common/assets';
import { TaskCard } from 'common/components';

import { Mission } from 'types';

const list: Mission[] = [
  {
    id: 'id',
    title: '법흥황이 죽은 이유 ㅋ',
    point: 100020,
    missionStatus: 'OPENED',
    user: {
      id: 'id',
      email: 'email',
      name: '채종인',
      profileImage: null,
    },
  },
  {
    id: 'id',
    title: '법흥황이 죽은 이유 ㅋ',
    point: 100020,
    missionStatus: 'OPENED',
    user: {
      id: 'id',
      email: 'email',
      name: '채종인',
      profileImage: null,
    },
  },
  {
    id: 'id',
    title: '법흥황이 죽은 이유 ㅋ',
    point: 100020,
    missionStatus: 'OPENED',
    user: {
      id: 'id',
      email: 'email',
      name: '채종인',
      profileImage: null,
    },
  },
  {
    id: 'id',
    title: '법흥황이 죽은 이유 ㅋ',
    point: 100020,
    missionStatus: 'OPENED',
    user: {
      id: 'id',
      email: 'email',
      name: '채종인',
      profileImage: null,
    },
  },
  {
    id: 'id',
    title: '법흥황이 죽은 이유 ㅋ',
    point: 100020,
    missionStatus: 'OPENED',
    user: {
      id: 'id',
      email: 'email',
      name: '채종인',
      profileImage: null,
    },
  },
  {
    id: 'id',
    title: '법흥황이 죽은 이유 ㅋ',
    point: 100020,
    missionStatus: 'OPENED',
    user: {
      id: 'id',
      email: 'email',
      name: '채종인',
      profileImage: null,
    },
  },
  {
    id: 'id',
    title: '법흥황이 죽은 이유 ㅋ',
    point: 100020,
    missionStatus: 'OPENED',
    user: {
      id: 'id',
      email: 'email',
      name: '채종인',
      profileImage: null,
    },
  },
  {
    id: 'id',
    title: '법흥황이 죽은 이유 ㅋ',
    point: 100020,
    missionStatus: 'OPENED',
    user: {
      id: 'id',
      email: 'email',
      name: '채종인',
      profileImage: null,
    },
  },
  {
    id: 'id',
    title: '법흥황이 죽은 이유 ㅋ',
    point: 100020,
    missionStatus: 'OPENED',
    user: {
      id: 'id',
      email: 'email',
      name: '채종인',
      profileImage: null,
    },
  },
  {
    id: 'id',
    title: '법흥황이 죽은 이유 ㅋ',
    point: 100020,
    missionStatus: 'OPENED',
    user: {
      id: 'id',
      email: 'email',
      name: '채종인',
      profileImage: null,
    },
  },
];

const MissionCarousel = () => {
  // api 로직 구현
  return (
    <S.CarouselWrapper>
      <S.PointerWrapper>
        <VectorIcon direction='left' />
      </S.PointerWrapper>
      <S.ContentWrapper>
        {list.map((item, index) => (
          <TaskCard
            key={item.id + index}
            userName={item.user.name}
            taskTitle={item.title}
            miledge={item.point}
            isShadow={true}
          />
        ))}
      </S.ContentWrapper>
      <S.PointerWrapper>
        <VectorIcon direction='right' />
      </S.PointerWrapper>
    </S.CarouselWrapper>
  );
};

export default MissionCarousel;
