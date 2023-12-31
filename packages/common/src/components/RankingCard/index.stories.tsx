'use client';

import RankingCard from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'common/RankingCard',
  component: RankingCard,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta<typeof RankingCard>;

type Story = StoryObj<typeof RankingCard>;

export const First: Story = {
  args: {
    rank: 1,
    id: 'userId',
    cumulatePoint: 1000,
    user: {
      id: 'userId',
      name: '이정우',
      profileImage:
        'https://s3.ap-northeast-2.amazonaws.com/st.dangidata/billing/course/image/133823_20230516174511852.png',
    },
  },
};

export const Fourth: Story = {
  args: {
    rank: 4,
    id: 'userId',
    cumulatePoint: 600,
    user: {
      id: 'userId',
      name: '이정우교수',
      profileImage:
        'https://file.newswire.co.kr/data/datafile2/thumb_480/2021/08/1889381261_20210805181428_7137680622.jpg',
    },
  },
};

export const NoIMG: Story = {
  args: {
    rank: 4,
    id: 'userId',
    cumulatePoint: 600,
    user: {
      id: 'userId',
      name: '이정우교수',
      profileImage: null,
    },
  },
};

export const Second: Story = {
  args: {
    rank: 2,
    id: 'userId',
    cumulatePoint: 999,
    user: {
      id: 'userId',
      name: '전지환님',
      profileImage:
        'https://image.rocketpunch.com/user/352358/352358_1606388335.jpg?s=200x200&t=cover',
    },
  },
};

export const Third: Story = {
  args: {
    rank: 3,
    id: 'userId',
    cumulatePoint: 700,
    user: {
      id: 'userId',
      name: '형록이형',
      profileImage:
        'https://publy.imgix.net/user-uploaded/463804/2023.04/d07558f49fda2c53d9c02a038337c88e84fff56ad0d04eed8f37c774c0eca49c.jpeg?w=400&h=400&auto=format&fm=jpeg',
    },
  },
};
