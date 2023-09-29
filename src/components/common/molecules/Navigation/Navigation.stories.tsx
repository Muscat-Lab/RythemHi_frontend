import type { Meta } from '@storybook/react';
import React from 'react';

import Navigation from '.';

const meta: Meta<typeof Navigation> = {
  title: 'molecules/Navigation',
  component: Navigation,
};

export default meta;

export const CommonNavigation = {
  render: () => <Navigation />,
};
