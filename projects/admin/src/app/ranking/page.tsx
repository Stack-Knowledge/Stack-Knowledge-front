import { RankingList } from 'common';

const list = [
  {
    id: 'sampleId',
    cumulatePoint: 1000,
    user: {
      id: 'sampleId',
      email: 'sample@gmail.com',
      name: 'user',
      profileImage: null,
    },
  },
  {
    id: 'sampleId',
    cumulatePoint: 800,
    user: {
      id: 'sampleId',
      email: 'sample@gmail.com',
      name: '이태랑',
      profileImage: null,
    },
  },
  {
    id: 'sampleId',
    cumulatePoint: 700,
    user: {
      id: 'sampleId',
      email: 'sample@gmail.com',
      name: '하제우와이정우와정찬교',
      profileImage: null,
    },
  },
  {
    id: '정찬교',
    cumulatePoint: 50,
    user: {
      id: '정찬교',
      email: 'sample@gmail.com',
      name: '정찬교',
      profileImage: null,
    },
  },
  {
    id: '100등',
    cumulatePoint: 0,
    user: {
      id: '100등',
      email: 'sample@gmail.com',
      name: '100등',
      profileImage: null,
    },
  },
];

export default function Ranking() {
  return <RankingList list={list} />;
}
