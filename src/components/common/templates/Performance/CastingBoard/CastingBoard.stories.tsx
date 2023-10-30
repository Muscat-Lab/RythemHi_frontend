import type { Meta } from '@storybook/react';
import React from 'react';

import Castings from '.';

const meta: Meta<typeof Castings> = {
  title: 'templates/Performance/Castings',
  component: Castings,
};

export default meta;

export const CommonCastings = {
  render: () => (
    <Castings performanceId="9a4f46e4-55c4-4d6f-ac93-2e6212e410b1" />
  ),
};
