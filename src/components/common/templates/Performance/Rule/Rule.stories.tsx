import type { Meta } from '@storybook/react';
import React from 'react';

import Rule from '.';

const meta: Meta<typeof Rule> = {
  title: 'templates/Performance/Rule',
  component: Rule,
};

export default meta;

export const CommonRule = {
  render: () => <Rule />,
};
