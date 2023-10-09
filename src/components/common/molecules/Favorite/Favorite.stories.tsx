import type { Meta } from '@storybook/react';
import React from 'react';

import Favorite from '.';

const meta: Meta<typeof Favorite> = {
  title: 'molecules/Favorite',
  component: Favorite,
};

export default meta;

export const Fav = {
  render: () => <Favorite sizeType="small" />,
};
