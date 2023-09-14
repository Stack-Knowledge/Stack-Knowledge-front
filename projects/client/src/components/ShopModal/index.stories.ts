'use client';

import ShopModal from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/ShopModal',
  component: ShopModal,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta<typeof ShopModal>;

type Story = StoryObj<typeof ShopModal>;

export const Primary: Story = {};
