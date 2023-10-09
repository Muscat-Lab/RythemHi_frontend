import type { Meta } from '@storybook/react';
import React from 'react';

import Icon from '@/components/common/atoms/Icon';

import CircleIcon from '.';

const meta: Meta<typeof CircleIcon> = {
  title: 'molecules/CircleIcon',
  component: CircleIcon,
};

export default meta;

export const CommonCircleIcon = {
  return: () => (
    <CircleIcon>
      <Icon
        iconName="bellIcon"
        iconSize="small"
        color="white"
      />
    </CircleIcon>
  ),
};
