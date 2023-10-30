import { action } from '@storybook/addon-actions';
import type { Meta } from '@storybook/react';
import React from 'react';

import Tabs from '.';

const meta: Meta<typeof Tabs> = {
  title: 'molecules/Tabs',
  component: Tabs,
};

export default meta;

export const CommonTabs = {
  render: () => (
    <Tabs
      tabItems={[
        '공연상세정보',
        '공연장정보',
        '취소 및 환불규정',
      ]}
      activeIdx={2}
      onClick={action('clicked tab')}
    />
  ),
};
