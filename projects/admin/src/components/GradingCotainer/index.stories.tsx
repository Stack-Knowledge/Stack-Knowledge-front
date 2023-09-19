'use client';

import GradingContainer from '.';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'admin/GradingContainer',
  component: GradingContainer,
} as Meta<typeof GradingContainer>;

type Story = StoryObj<typeof GradingContainer>;

export const Primary: Story = {
  args: {
    content: '아 하나도 모르겠어요 ... ㅠㅠ',
  },
};
