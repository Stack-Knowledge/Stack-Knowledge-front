'use client';

import RankingHeader from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/RankingHeader',
  component: RankingHeader,
} as Meta<typeof RankingHeader>;

type Story = StoryObj<typeof RankingHeader>;

export const Primary: Story = {
  args: {
    ranking: 1,
    data: {
      id: 'sampleId',
      cumulatePoint: 1000,
      user: {
        id: 'sampleId',
        name: 'user',
        profileImage:
          'https://s3.ap-northeast-2.amazonaws.com/st.dangidata/billing/course/image/133823_20230516174511852.png',
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    ranking: 2,
    data: {
      id: 'sampleId',
      cumulatePoint: 800,
      user: {
        id: 'sampleId',
        name: '이태랑',
        profileImage:
          'https://s3.ap-northeast-2.amazonaws.com/st.dangidata/billing/course/image/133823_20230516174511852.png',
      },
    },
  },
};
