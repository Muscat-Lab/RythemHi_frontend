import type { Meta } from '@storybook/react';
import React from 'react';

import Layout from '@/components/common/templates/Layout';

import Home from '.';

const meta: Meta<typeof Home> = {
  title: 'pages/Home',
  component: Home,
};

export default meta;

export const HomePage = {
  render: () => (
    <Layout>
      <Home />
    </Layout>
  ),
};
