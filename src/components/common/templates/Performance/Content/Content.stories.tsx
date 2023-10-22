import type { Meta } from '@storybook/react';
import React from 'react';

import Content from '.';

const meta: Meta<typeof Content> = {
  title: 'templates/Performance/Content',
  component: Content,
};

export default meta;

export const CommonContent = {
  render: () => (
    <Content
      performanceId="9a4f46e4-55c4-4d6f-ac93-2e6212e410b1"
      activeIdx={0}
    />
  ),
};
