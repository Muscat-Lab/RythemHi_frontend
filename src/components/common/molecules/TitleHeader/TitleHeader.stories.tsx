import { action } from '@storybook/addon-actions';
import type { Meta } from '@storybook/react';
import React from 'react';

import TitleHeader from '.';

const meta: Meta<typeof TitleHeader> = {
  title: 'molecules/TitleHeader',
  component: TitleHeader,
};

export default meta;

export const CommonTitleHeader = {
  render: () => (
    <TitleHeader
      title="티켓 오픈예정 리스트"
      handleGoToRouter={action('go router')}
    />
  ),
};
