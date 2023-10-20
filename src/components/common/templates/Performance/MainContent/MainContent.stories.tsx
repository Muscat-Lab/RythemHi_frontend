import type { Meta } from '@storybook/react';
import React from 'react';

import MainContent from '.';

const meta: Meta<typeof MainContent> = {
  title: 'templates/MainContent',
  component: MainContent,
};

export default meta;

export const CommonMainContent = {
  render: () => (
    <MainContent id="9a4f46e4-55c4-4d6f-ac93-2e6212e410b1" />
  ),
};
