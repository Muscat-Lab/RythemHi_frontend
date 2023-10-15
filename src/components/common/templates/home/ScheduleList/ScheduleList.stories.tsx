import type { Meta } from '@storybook/react';
import React from 'react';

import ScheduleList from '.';

const meta: Meta<typeof ScheduleList> = {
  title: 'templates/ScheduleList',
  component: ScheduleList,
};

export default meta;

export const CommonScheduleList = {
  render: () => <ScheduleList />,
};
