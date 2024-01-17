'use client';

import Header from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'common/Header',
  component: Header,
} as Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

export const Admin: Story = {
  args: {
    role: 'admin',
  },
};

export const Client: Story = {
  args: {
    role: 'client',
  },
};
