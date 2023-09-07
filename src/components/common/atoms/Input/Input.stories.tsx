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
        placeholder="이메일 주소"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        width="300px"
      />
      <br />
      <Input
        type="password"
        name="password"
        placeholder="영문, 숫자, 특수문자 조합 6자 이상"
        value={password}
        minLength="6"
        width="300px"
        onChange={(e) => setPassword(e.target.value)}
      />
    </>
  );
};

export const SignIn = {
  render: () => <SignInInput />,
};
