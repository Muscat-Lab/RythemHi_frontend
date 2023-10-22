import type { Meta } from '@storybook/react';
import React, { useState } from 'react';

import Notice from '.';

const meta: Meta<typeof Notice> = {
  title: 'templates/Performance/Notice',
  component: Notice,
};

export default meta;

export const CommonNotice = {
  render: () => (
    <Notice performanceId="9a4f46e4-55c4-4d6f-ac93-2e6212e410b1" />
  ),
};
