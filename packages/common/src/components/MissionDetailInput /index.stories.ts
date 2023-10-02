'use client';

import MissionDetailInput from '.';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'common/MissionDetailInput ',
  component: MissionDetailInput,
} as Meta<typeof MissionDetailInput>;

type Story = StoryObj<typeof MissionDetailInput>;

export const Admin: Story = {
  args: {
    role: 'admin',
  },
};

export const Client: Story = {
  args: {
    role: 'admin',
  },
};
