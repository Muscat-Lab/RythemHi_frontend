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
  const [phone, setPhone] = useState('');

  return (
    <>
      <Input
        type="search"
        name="email"
        inputSize="small"
        placeholder="kimstub@naver.com"
        onChange={(e) => setEmail(e.target.value)}
        active={email.length > 0 ? 'active' : 'none'}
        value={email}
      />
      <div style={{ marginBottom: '10px' }} />
      <Input
        type="search"
        name="email"
        inputSize="small"
        placeholder="01012345678"
        onChange={(e) => setPhone(e.target.value)}
        active={phone.length > 0 ? 'active' : 'none'}
        value={phone}
      />
    </>
  );
};

export const SignIn = {
  render: () => <SignInInput />,
};
