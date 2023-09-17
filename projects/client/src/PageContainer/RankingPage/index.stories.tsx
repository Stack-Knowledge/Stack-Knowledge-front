'use client';

import RankingPage from '.';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/Page/RankingPage',
  component: RankingPage,
} as Meta<typeof RankingPage>;

type Story = StoryObj<typeof RankingPage>;

export const Primary: Story = {
  args: {
    data: {
      profileImage: '/path/to/image.jpg',
      name: 'Example Name',
      cumulatePoint: 100,
    },
    ranking: 1,
  },
};
