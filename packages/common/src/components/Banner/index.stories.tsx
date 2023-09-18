'use client';

import Banner from '.';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'common/Banner',
  component: Banner,
} as Meta<typeof Banner>;

type Story = StoryObj<typeof Banner>;

export const Primary: Story = {};
