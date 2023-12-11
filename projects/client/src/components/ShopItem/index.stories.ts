'use client';

import ShopItem from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/ShopItem',
  component: ShopItem,
} as Meta<typeof ShopItem>;

type Story = StoryObj<typeof ShopItem>;

export const Primary: Story = {
  args: {
    data: {
      itemId: 'id',
      name: '자장면',
      price: 5000,
      image:
        'https://mblogthumb-phinf.pstatic.net/MjAxNzAxMjNfNDkg/MDAxNDg1MTYwMTQ1MDc5.H7I84KnCb0_U0Fb312NMMk10dbmNhdMb45jDiNYs13Eg.e3185KBkHafPDJpOjsZ7vvvH741l0TzEt2vVNvePS7Mg.JPEG.china_lab/shutterstock_524181190.jpg?type=w800',
    },
  },
};
