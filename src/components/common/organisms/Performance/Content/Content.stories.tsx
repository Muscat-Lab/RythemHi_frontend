import type { Meta } from '@storybook/react';
import React from 'react';

import Content from '.';

const meta: Meta<typeof Content> = {
  title: 'organisms/Content',
  component: Content,
};

export default meta;

export const CommonContent = {
  render: () => (
    <Content
      title="하트시그널"
      begin="2023-10-20"
      end="2023-10-24"
      scheduleText="수목금 19:30 / 토 19:00 / 일 14:00"
      locationText="하마시어터(구, 가든씨어터)"
    />
  ),
};
