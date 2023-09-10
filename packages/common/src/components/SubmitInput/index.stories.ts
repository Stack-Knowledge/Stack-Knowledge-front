'use client';

import SubmitInput from '.';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'common/SubmitInput',
  component: SubmitInput,
} as Meta<typeof SubmitInput>;

type Story = StoryObj<typeof SubmitInput>;

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
