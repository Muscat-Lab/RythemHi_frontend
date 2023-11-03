import type { Meta } from '@storybook/react';
import React from 'react';

import StartArtist from '.';

const meta: Meta<typeof StartArtist> = {
  title: 'pages/StartArtist',
  component: StartArtist,
};

export default meta;

export const StartArtistPage = {
  render: () => <StartArtist />,
};
