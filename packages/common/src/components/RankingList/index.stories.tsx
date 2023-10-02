'use client';

import RankingList from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'common/RankingList',
  component: RankingList,
  parameters: {},
} as Meta<typeof RankingList>;

type Story = StoryObj<typeof RankingList>;

export const Primary: Story = {};
