'use client';

import ShopCarousel from '.';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'admin/ShopCarousel',
  component: ShopCarousel,
} as Meta<typeof ShopCarousel>;

type Story = StoryObj<typeof ShopCarousel>;

export const Primary: Story = {};
