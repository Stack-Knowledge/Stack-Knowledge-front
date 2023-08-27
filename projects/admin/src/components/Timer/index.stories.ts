'use client';

import Timer from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'admin/Timer',
  component: Timer,
} as Meta<typeof Timer>;

type Story = StoryObj<typeof Timer>;

export const Primary: Story = {};
