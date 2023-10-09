import type { Meta } from '@storybook/react';
import React from 'react';

import MiniFavorite from '.';

const meta: Meta<typeof MiniFavorite> = {
  title: 'molecules/MiniFavorite',
  component: MiniFavorite,
};

export default meta;

export const MiniFav = {
  render: () => <MiniFavorite sizeType="small" />,
};
