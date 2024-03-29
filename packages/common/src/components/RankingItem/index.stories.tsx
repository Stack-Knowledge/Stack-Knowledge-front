'use client';

import RankingItem from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'common/RankingItem',
  component: RankingItem,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta<typeof RankingItem>;

type Story = StoryObj<typeof RankingItem>;

export const Hund: Story = {
  args: {
    ranking: 100,
    item: {
      id: '100등',
      cumulatePoint: 0,
      user: {
        id: '100등',
        name: '100등',
        profileImage:
          'https://s3.ap-northeast-2.amazonaws.com/st.dangidata/billing/course/image/133823_20230516174511852.png',
      },
    },
  },
};

export const NoIMG: Story = {
  args: {
    ranking: 4,
    item: {
      id: '정찬교',
      cumulatePoint: 50,
      user: {
        id: '정찬교',
        name: '정찬교',
        profileImage: null,
      },
    },
  },
};

export const Primary: Story = {
  args: {
    ranking: 1,
    item: {
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
    item: {
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

export const Tertiary: Story = {
  args: {
    ranking: 3,
    item: {
      id: 'sampleId',
      cumulatePoint: 700,
      user: {
        id: 'sampleId',
        name: '하제우와이정우와정찬교',
        profileImage:
          'https://s3.ap-northeast-2.amazonaws.com/st.dangidata/billing/course/image/133823_20230516174511852.png',
      },
    },
  },
};
