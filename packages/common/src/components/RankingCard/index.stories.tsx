'use client';

import RankingCard from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'common/RankingCard',
  component: RankingCard,
} as Meta<typeof RankingCard>;

type Story = StoryObj<typeof RankingCard>;

export const Primary: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
