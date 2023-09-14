'use client';

import ShopModalItem from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/ShopModalItem',
  component: ShopModalItem,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta<typeof ShopModalItem>;

type Story = StoryObj<typeof ShopModalItem>;

export const Primary: Story = {};
