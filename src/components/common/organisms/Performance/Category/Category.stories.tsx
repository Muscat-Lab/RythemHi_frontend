import type { Meta } from '@storybook/react';
import React from 'react';

import Category from '.';
import { CategoryData } from '@/constants/data';

const meta: Meta<typeof Category> = {
  title: 'organisms/Category',
  component: Category,
};

export default meta;

export const CommonCategory = {
  render: () => <Category data={CategoryData} />,
};
