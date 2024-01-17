'use client';

import MainContents from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'common/MainContents',
  component: MainContents,
} as Meta<typeof MainContents>;

type Story = StoryObj<typeof MainContents>;

export const Primary: Story = {};
