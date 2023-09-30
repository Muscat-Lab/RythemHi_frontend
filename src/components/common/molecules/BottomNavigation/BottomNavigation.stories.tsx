import type { Meta } from '@storybook/react';
import React from 'react';

import BottomNavigation from '.';

const meta: Meta<typeof BottomNavigation> = {
  title: 'molecules/BottomNavigation',
  component: BottomNavigation,
};

export default meta;

export const CommonBottomNavigation = {
  return: () => <BottomNavigation />,
};
