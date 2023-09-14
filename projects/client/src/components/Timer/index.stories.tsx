'use client';

import Timer from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/Timer',
  component: Timer,
} as Meta<typeof Timer>;

type Story = StoryObj<typeof Timer>;

export const Primary: Story = {
  args: {
    hour: '10',
    minute: '30',
  },
};

export const Secondary: Story = {
  args: {
    hour: '08',
    minute: '23',
  },
};
