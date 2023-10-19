import type { Meta } from '@storybook/react';
import React from 'react';

import PopularList from '.';

const meta: Meta<typeof PopularList> = {
  title: 'templates/PopularList',
  component: PopularList,
};

export default meta;

export const CommonPopularList = {
  render: () => <PopularList />,
};
