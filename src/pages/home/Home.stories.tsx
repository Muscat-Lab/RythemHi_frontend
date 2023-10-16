import type { Meta } from '@storybook/react';
import React from 'react';

import Home from '.';

const meta: Meta<typeof Home> = {
  title: 'pages/Home',
  component: Home,
};

export default meta;

export const HomePage = {
  render: () => <Home />,
};
