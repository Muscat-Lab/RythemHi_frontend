import React from 'react';
import styled from 'styled-components';

import { flexbox } from '@/styles/mixin';
import { SVGIconKeys } from '@/utils/iconMap';

import Icon from '../Icon';
import Text from '../Text';

type SizeType = 'small' | 'medium' | 'large';
type BoldType = 'light' | 'normal' | 'bold';

type VariantType =
  | 'success'
  | 'error'
  | 'kakao'
  | 'naver'
  | 'apple'
  | 'close'
  | 'default';

interface ButtonProps {
  buttonSize: SizeType;
  variant?: VariantType;
  className?: string;
  text: string;
  textType?: BoldType;
  textSize: string;
  iconKey?: SVGIconKeys;
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
      case 'kakao':
        return '#FEE500';
      case 'naver':
        return '#03C75A';
      case 'apple':
        return '#FFF';
      case 'close':
        return '#000';
      default:
        return '#4845CC';
    }
  }};

  font-size: ${({ variant }) => {
    switch (variant) {
      case 'kakao':
        return '16px';
      case 'naver':
        return '16px';
      case 'apple':
        return '16px';
      default:
        return '18px';
    }
  }};

  font-weight: ${({ variant }) => {
    switch (variant) {
      case 'kakao':
        return '500';
      case 'naver':
        return '500';
      case 'apple':
        return '500';
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

const IconWrapper = styled.div`
  ${flexbox({ dir: 'column', jc: 'center', ai: 'center' })}
  margin-right: 10px;
`;
const TextWrapper = styled.div`
  ${flexbox({ dir: 'column', jc: 'center', ai: 'center' })}
`;

const Button = ({
  text,
  textType,
  buttonSize,
  variant = 'default',
  className,
  iconKey,
  ...buttonAttr
}: ButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  let iconColor = '#fff';

  if (variant === 'naver' || variant === 'apple') {
    iconColor = '#000';
  }
  return (
    <StyledButton
      buttonSize={buttonSize}
      variant={variant}
      className={className}
      text={text}
      {...buttonAttr}
    >
      {iconKey && (
        <IconWrapper>
          <Icon
            iconName={iconKey}
            iconSize="small"
            color={iconColor}
          />
        </IconWrapper>
      )}
      <TextWrapper>
        <Text
          textSize="small"
          textType={textType}
          textColor={iconColor}
        >
          {text}
        </Text>
      </TextWrapper>
    </StyledButton>
  );
};

export default Button;
