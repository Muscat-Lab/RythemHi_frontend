import type { Meta } from '@storybook/react';
import React from 'react';

import ScheduleInfoCard from '@/components/common/organisms/home/ScheduleInfoCard';
import { scheduleInfoListData } from '@/constants/data';

import Layout from '../Layout';

import Carousel from '.';

const meta: Meta<typeof Carousel> = {
  title: 'templates/Carousel',
  component: Carousel,
};

export default meta;

export const CommonCarousel = {
  render: () => (
    <Layout>
      <Carousel
        items={scheduleInfoListData.map(
          ({
            id,
            bgPath,
            ticketOpenDate,
            title,
            performanceDate,
          }) => (
            <ScheduleInfoCard
              key={id}
              id={id}
              bgPath={bgPath}
              ticketOpenDate={ticketOpenDate}
              title={title}
              performanceDate={performanceDate}
            />
          ),
        )}
      />
    </Layout>
  ),
};
