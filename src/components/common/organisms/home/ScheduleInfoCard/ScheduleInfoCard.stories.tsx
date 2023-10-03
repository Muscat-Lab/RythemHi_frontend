import type { Meta } from '@storybook/react';
import React from 'react';

import ScheduleInfoCard from '.';

const meta: Meta<typeof ScheduleInfoCard> = {
  title: 'organisms/ScheduleInfoCard',
  component: ScheduleInfoCard,
};

export default meta;

export const CommonScheduleInfoCard = {
  render: () => (
    <ScheduleInfoCard
      bgPath="https://source.unsplash.com/random/300×300"
      ticketOpenDate="티켓 오픈 2023.06.01 14:00PM"
      title="2023 sza 내한"
      performanceDate="2023.07.12 (sat) 18:00PM"
    />
  ),
};
