import type { Meta } from '@storybook/react';
import React from 'react';

import BarcodeCard from '.';

const meta: Meta<typeof BarcodeCard> = {
  title: 'organisms/BarcodeCard',
  component: BarcodeCard,
};

export default meta;

export const CommonBarcodeCard = {
  render: () => <BarcodeCard />,
};
