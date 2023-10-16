import type { Meta } from '@storybook/react';
import React from 'react';

import StartPush from '.';

const meta: Meta<typeof StartPush> = {
  title: 'pages/StartPush',
  component: StartPush,
};

export default meta;

export const StartPushPage = {
  render: () => <StartPush />,
};
