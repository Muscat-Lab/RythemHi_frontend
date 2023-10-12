import type { Meta } from '@storybook/react';
import {
  within,
  userEvent,
} from '@storybook/testing-library';
import React from 'react';

import SocialLoginButton from '.';

const meta: Meta<typeof SocialLoginButton> = {
  title: 'molecules/SocialLoginButton',
  component: SocialLoginButton,
};

export default meta;

const SignInButton = () => (
  <SocialLoginButton
    iconKey="kakao"
    variant="kakao"
    text="카카오로 계속하기"
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
