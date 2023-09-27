import React from 'react';
import { styled } from 'styled-components';

type SizeType = 'small' | 'medium' | 'large';
type VariantType = 'success' | 'error';

interface InputProps {
  inputSize: SizeType;
  variant?: VariantType;
  className?: string;
}

// TODO: 디자인이 나오면 inputSize(width, height) 조정 필요.
const StyledInput = styled.input<InputProps>`
  outline: none;
  border-width: 0 0 1px;
  padding: 16px;
  color: #1d232e;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  width: ${({ inputSize }) => {
    switch (inputSize) {
      case 'small':
        return '200px';
      case 'medium':
        return '300px';
      case 'large':
        return '400px';
      default:
        return '300px';
    }
  }};

  height: ${({ inputSize }) => {
    switch (inputSize) {
      case 'small':
        return '30px';
      case 'medium':
        return '40px';
      case 'large':
        return '50px';
      default:
        return '40px';
    }
  }};

  border-color: ${({ variant }) => {
    switch (variant) {
      case 'success':
        return 'green';
      case 'error':
        return '#F00';
      default:
        return '#e6e6e6';
    }
  }};

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
  variant,
  inputSize,
  className,
  ...inputAttr
}: InputProps &
  React.InputHTMLAttributes<HTMLInputElement>) => (
  <StyledInput
    inputSize={inputSize}
    variant={variant}
    className={className}
    {...inputAttr}
  />
);

export default Input;
