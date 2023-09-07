import React from 'react';
import { styled } from 'styled-components';

interface InputProps {
  type: string;
  name: string;
  placeholder?: string;
  value: string | number;
  minLength?: string;
  width?: string;
  onChange: (
    // eslint-disable-next-line no-unused-vars
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
}

const StyledInput = styled.input<InputProps>`
  outline: none;
  border-width: 0 0 1px;
  border-color: #e6e6e6;
  padding: 16px;
  color: #1d232e;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  width: ${(inputProps) => inputProps.width};

  ${(inputProps) =>
    inputProps.type === 'password' &&
    `
    font-family: caption;
  `}

  &::placeholder {
    color: #8f8f8f;
  }

  &:-webkit-input-placeholder {
    color: #8f8f8f;
  }

  &:-ms-input-placeholder {
    color: #8f8f8f;
  }

  &:focus {
    border-width: 0 0 1px;
    border-color: #1d232e;
    color: #1d232e;
  }

  &:focus::placeholder {
    color: transparent;
  }

  &:focus::-webkit-input-placeholder {
    color: transparent;
  }

  &:focus:-ms-input-placeholder {
    color: transparent;
  }
`;

const Input = ({
  type,
  name,
  placeholder,
  value,
  minLength,
  width,
  onChange,
}: InputProps) => (
  <StyledInput
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    minLength={minLength}
    width={width}
    onChange={onChange}
  />
);

export default Input;
