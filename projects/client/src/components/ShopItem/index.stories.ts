'use client';

import ShopItem from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/ShopItem',
  component: ShopItem,
} as Meta<typeof ShopItem>;

type Story = StoryObj<typeof ShopItem>;

export const Primary: Story = {};
