import type { Meta } from '@storybook/react';
import React, { useState } from 'react';

import Input from '.';

const meta: Meta<typeof Input> = {
  title: 'atoms/Input',
  component: Input,
};

export default meta;

const SignInInput = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Input
        type="email"
        name="email"
        inputSize="small"
        placeholder="email 입력하기"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <br />
      <Input
        type="password"
        name="password"
        inputSize="medium"
        placeholder="영문, 숫자, 특수문자 조합 6자 이상"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
    </>
  );
};

export const SignIn = {
  render: () => <SignInInput />,
};
