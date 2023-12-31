'use client';

import Modal from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'admin/Modal',
  component: Modal,
} as Meta<typeof Modal>;

type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    onClick: () => {},
  },
};
