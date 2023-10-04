import type { Meta } from '@storybook/react';
import {
  within,
  userEvent,
} from '@storybook/testing-library';
import React from 'react';

import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'atoms/Button',
  component: Button,
};

export default meta;

const SignInButton = () => (
  <Button
    buttonSize="medium"
    variant="naver"
    text="네이버로 계속하기"
    textSize="small"
    iconKey="settingsIcon"
  />
);

export const SignIn = {
  render: () => <SignInButton />,
  play: async ({ canvasElement, step }: any) => {
    const canvas = within(canvasElement);

    await step('clicked Login button', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });
  },
};
