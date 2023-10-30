import type { Meta } from '@storybook/react';
import React from 'react';

import TitleCard from '.';

const meta: Meta<typeof TitleCard> = {
  title: 'organisms/TitleCard',
  component: TitleCard,
};

export default meta;

export const CommonTitleCard = {
  render: () => (
    <TitleCard posterImageUrl="https://tito-dev.s3.amazonaws.com/poster_images/9a4f46e4-55c4-4d6f-ac93-2e6212e410b1/20231016132322_73b1ef21-cf71-435d-b63b-c74a2da802e3.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAZOWJQ62SMAPFBGPY%2F20231020%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20231020T120334Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=01c46d22bc7ec01ad6f507ef554f4b6670f2dc4407998f84c469117a5fc938e9" />
  ),
};
