import type { Meta } from '@storybook/react';
import React from 'react';

import Layout from '@/components/common/templates/Layout';

import Start from '.';

const meta: Meta<typeof Start> = {
  title: 'pages/Start',
  component: Start,
};

export default meta;

export const StartPage = {
  render: () => (
    <Layout>
      <Start />
    </Layout>
  ),
};
