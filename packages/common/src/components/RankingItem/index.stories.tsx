'use client';

import RankingItem from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'common/RankingItem',
  component: RankingItem,
} as Meta<typeof RankingItem>;

type Story = StoryObj<typeof RankingItem>;

export const Primary: Story = {
  args: {
    ranking: 1,
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
};
