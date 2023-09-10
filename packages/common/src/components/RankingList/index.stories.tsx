'use client';

import RankingList from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'common/RankingList',
  component: RankingList,
  parameters: {},
} as Meta<typeof RankingList>;

type Story = StoryObj<typeof RankingList>;

const list = [
  {
    id: 'sampleId',
    cumulatePoint: 1000,
    user: {
      id: 'sampleId',
      email: 'sample@gmail.com',
      name: 'user',
      profileImage:
        'https://s3.ap-northeast-2.amazonaws.com/st.dangidata/billing/course/image/133823_20230516174511852.png',
    },
  },
  {
    id: 'sampleId',
    cumulatePoint: 800,
    user: {
      id: 'sampleId',
      email: 'sample@gmail.com',
      name: '이태랑',
      profileImage:
        'https://s3.ap-northeast-2.amazonaws.com/st.dangidata/billing/course/image/133823_20230516174511852.png',
    },
  },
  {
    id: 'sampleId',
    cumulatePoint: 700,
    user: {
      id: 'sampleId',
      email: 'sample@gmail.com',
      name: '하제우와이정우와정찬교',
      profileImage:
        'https://s3.ap-northeast-2.amazonaws.com/st.dangidata/billing/course/image/133823_20230516174511852.png',
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
      profileImage:
        'https://s3.ap-northeast-2.amazonaws.com/st.dangidata/billing/course/image/133823_20230516174511852.png',
    },
  },
];

export const Primary: Story = {
  args: {
    list: list,
  },
};
