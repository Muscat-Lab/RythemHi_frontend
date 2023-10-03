import type { Meta } from '@storybook/react';
import React from 'react';

import InfoTag from '.';

const meta: Meta<typeof InfoTag> = {
  title: 'molecules/InfoTag',
  component: InfoTag,
};

export default meta;

export const CommonInfoTag = {
  render: () => (
    <InfoTag
      iconKey="backButtonIcon"
      text="사전등록완료 2건"
      color="#4845CC"
      bgColor="#4845CC"
    />
  ),
};
