'use client';

import TaskCard from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'common/TaskCard',
  component: TaskCard,
} as Meta<typeof TaskCard>;

type Story = StoryObj<typeof TaskCard>;

export const Primary: Story = {
  args: {
    userName: '이동욱',
    taskTitle: '북학파의 배경',
    miledge: 1000,
  },
};

export const Shadow: Story = {
  args: {
    userName: '이동욱',
    taskTitle: '북학파의 배경',
    miledge: 1000,
    isShadow: true,
  },
};
