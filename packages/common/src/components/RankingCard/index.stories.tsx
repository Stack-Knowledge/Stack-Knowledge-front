'use client';

import RankingCard from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'common/RankingCard',
  component: RankingCard,
} as Meta<typeof RankingCard>;

type Story = StoryObj<typeof RankingCard>;

export const ST1: Story = {
  args: {
    rank: 1,
    id: 'userId',
    cumulatePoint: 1000,
    user: {
      id: 'userId',
      email: 'moondgod@gmail.com',
      name: '이정우',
      profileImage:
        'https://s3.ap-northeast-2.amazonaws.com/st.dangidata/billing/course/image/133823_20230516174511852.png',
    },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
