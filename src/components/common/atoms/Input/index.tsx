import React from 'react';
import { styled } from 'styled-components';

type SizeType = 'small' | 'medium' | 'large';
type VariantType = 'success' | 'error';
type ActiveType = 'active' | 'none';

interface InputProps {
  inputSize: SizeType;
  variant?: VariantType;
  active?: ActiveType;
  className?: string;
}

// TODO: 디자인이 나오면 inputSize(width, height) 조정 필요.
const StyledInput = styled.input<InputProps>`
  outline: none;
  padding: 15px 11px;
  font-size: 16px;

  color: ${({ variant }) => {
    switch (variant) {
      case 'success':
        return '#1c1c1c';
      case 'error':
        return '#D61C1C';
      default:
        return '#1c1c1c';
    }
  }};

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

  height: 51px;

  border: ${({ variant }) => {
    switch (variant) {
      case 'success':
        return '1.5px solid #4845CC';
      case 'error':
        return '1.5px solid #D61C1C';
      default:
        return '1.5px solid #3D3D3D';
    }
  }};

  border-radius: 5px;

  background: ${({ active }) => {
    switch (active) {
      case 'active':
        return '#fff;';
      case 'none':
        return '#ececec';
      default:
        return '#ececec';
    }
  }};

  opacity: ${({ active }) => {
    switch (active) {
      case 'active':
        return '1';
      case 'none':
        return '0.18';
      default:
        return '0.18';
    }
  }};

  &::placeholder {
    color: #3d3d3d;
  }

  &:-webkit-input-placeholder {
    color: #3d3d3d;
  }

  &:-ms-input-placeholder {
    color: #3d3d3d;
  }

  &:focus {
    color: #1c1c1c;
    opacity: 1;
    background: #fff;
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

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    background: url(https://img.icons8.com/fluency-systems-regular/20/x.png)
      center center no-repeat;
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
