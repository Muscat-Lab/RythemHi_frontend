import React from 'react';
import styled from 'styled-components';

type SizeType = 'small' | 'medium' | 'large';
type BoldType = 'light' | 'normal' | 'bold';

type VariantType =
  | 'success'
  | 'error'
  | 'close'
  | 'kakao'
  | 'naver'
  | 'apple'
  | 'default';

interface ButtonProps {
  children: React.ReactNode;
  buttonSize: SizeType;
  variant?: VariantType;
  boldType: BoldType;
  className?: string;
}

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  outline: none;
  border-radius: 8px;

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
      case 'close':
        return '#111';
      case 'kakao':
        return '#FEE500';
      case 'naver':
        return '#03C75A';
      case 'apple':
        return '#FFF';
      default:
        return '#4845CC';
    }
  }};

  font-size: 18px;
  color: #fff;

  font-weight: ${({ boldType }) => {
    switch (boldType) {
      case 'light':
        return '300';
      case 'normal':
        return '500';
      case 'bold':
        return '700';
      default:
        return '700';
    }
  }};

  box-shadow:
    0px 2px 3px 0px rgba(0, 0, 0, 0.17),
    0px 0px 3px 0px rgba(0, 0, 0, 0.08);

  &:active {
    filter: brightness(95%);
  }
`;

const Button = ({
  children,
  buttonSize,
  variant = 'default',
  className,
  boldType,
  ...buttonAttr
}: ButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <StyledButton
    buttonSize={buttonSize}
    variant={variant}
    className={className}
    boldType={boldType}
    {...buttonAttr}
  >
    {children}
  </StyledButton>
);

export default Button;
