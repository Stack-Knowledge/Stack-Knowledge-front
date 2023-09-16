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
    hour: '00',
    minute: '15',
  },
};

export const Secondary: Story = {
  args: {
    hour: '08',
    minute: '23',
  },
};

export const thirdary: Story = {
  args: {
    hour: '23',
    minute: '59',
  },
};
