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
  <Button buttonSize="large" boldType="bold">
    동의하고 알림받기
  </Button>
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
