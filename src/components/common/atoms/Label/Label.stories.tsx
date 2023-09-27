import type { Meta } from '@storybook/react';

import Label from '.';

const meta: Meta<typeof Label> = {
  title: 'atoms/Label',
  component: Label,
};

export default meta;

const SmallLabelComponent = () => (
  <>
    <Label
      labelSize="small"
      labelType="normal"
      variant="error"
    >
      이메일 형식으로 입력해주세요.
    </Label>
    <br />
    <Label
      labelSize="small"
      labelType="normal"
      variant="success"
    >
      이메일 형식으로 입력해주세요.
    </Label>
  </>
);

export const SmallText = {
  render: () => <SmallLabelComponent />,
};

const MediumLabelComponent = () => (
  <Label labelSize="medium" labelType="bold">
    아이디
  </Label>
);

export const MediumLabel = {
  render: () => <MediumLabelComponent />,
};
