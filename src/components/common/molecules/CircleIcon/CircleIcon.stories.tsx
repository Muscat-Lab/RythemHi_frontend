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
    <CircleIcon circleIconSize="medium" isActive={false}>
      <Icon
        iconName="bellIcon"
        iconSize="medium"
        color="#fff"
      />
    </CircleIcon>
  ),
};
