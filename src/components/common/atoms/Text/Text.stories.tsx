import type { Meta } from '@storybook/react';

import Text from '.';

const meta: Meta<typeof Text> = {
  title: 'atoms/Text',
  component: Text,
};

export default meta;

const SmallTextComponent = () => (
  <Text
    textSize="small"
    textType="normal"
    variant="subTitle"
  >
    이번주 추가된 신상 카페
  </Text>
);

export const SmallText = {
  render: () => <SmallTextComponent />,
};

const MediumTextComponent = () => (
  <Text textSize="medium" textType="bold">
    RhythmHi
  </Text>
);

export const MediumText = {
  render: () => <MediumTextComponent />,
};
