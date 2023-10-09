import { action } from '@storybook/addon-actions';
import type { Meta } from '@storybook/react';
import React from 'react';

import Indicator from '.';

const meta: Meta<typeof Indicator> = {
  title: 'atoms/Indicator',
  component: Indicator,
};

export default meta;

export const CommonIndicator = {
  render: () => (
    <Indicator
      nums={3}
      handleChangeCard={action('change Card')}
    />
  ),
};
