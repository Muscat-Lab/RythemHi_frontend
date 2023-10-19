import type { Meta } from '@storybook/react';
import React from 'react';

import PopularInfoCard from '.';

const meta: Meta<typeof PopularInfoCard> = {
  title: 'organisms/PopularInfoCard',
  component: PopularInfoCard,
};

export default meta;

export const CommonPopularInfoCard = {
  render: () => (
    <PopularInfoCard
      id="100abacd"
      currentIdx={1}
      posterImageUrl="https://source.unsplash.com/random/300×300"
      title="2023 sza 내한"
      performanceDate="2023.07.12 (sat) 18:00PM"
      location="블루스퀘어 아이마켓홀"
    />
  ),
};
