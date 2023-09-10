"use client";

import Example from ".";

import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "client/Example",
  component: Example,
} as Meta<typeof Example>;

type Story = StoryObj<typeof Example>;

export const Primary: Story = {};
