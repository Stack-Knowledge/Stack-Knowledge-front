'use client';

import LoginButton from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'common/LoginButton',
  component: LoginButton,
} as Meta<typeof LoginButton>;

type Story = StoryObj<typeof LoginButton>;

export const Primary: Story = {};
