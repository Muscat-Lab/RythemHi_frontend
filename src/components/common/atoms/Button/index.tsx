import React from 'react';
import styled from 'styled-components';

type SizeType = 'small' | 'medium' | 'large';
type VariantType = 'success' | 'error' | 'default';

interface ButtonProps {
  children: React.ReactNode;
  buttonSize: SizeType;
  variant?: VariantType;
  className?: string;
}

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  outline: none;
  border-radius: 8px;
  color: #fff;

  width: ${({ buttonSize }) => {
    switch (buttonSize) {
      case 'small':
        return '100px';
      case 'medium':
        return '200px';
      case 'large':
        return '300px';
      default:
        return '100px';
    }
  }};

  height: ${({ buttonSize }) => {
    switch (buttonSize) {
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

  background-color: ${({ variant }) => {
    switch (variant) {
      case 'success':
        return 'blue';
      case 'error':
        return '#F00';
      default:
        return '#6D12CF';
    }
  }};
`;

const Button = ({
  children,
  buttonSize,
  variant = 'default',
  className,
  ...buttonAttr
}: ButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <StyledButton
    buttonSize={buttonSize}
    variant={variant}
    className={className}
    {...buttonAttr}
  >
    {children}
  </StyledButton>
);

export default Button;
