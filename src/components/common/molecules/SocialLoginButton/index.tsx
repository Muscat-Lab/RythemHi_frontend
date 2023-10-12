import React from 'react';
import styled from 'styled-components';

import { flexbox } from '@/styles/mixin';
import { SVGIconKeys } from '@/utils/iconMap';

import Icon from '../../atoms/Icon';
import Text from '../../atoms/Text';

type VariantType = 'kakao' | 'naver' | 'apple';

interface ButtonProps {
  variant?: VariantType;
  className?: string;
  text: string;
  iconKey?: SVGIconKeys;
}

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  outline: none;
  border-radius: 8px;

  width: 350px;

  height: 54px;

  background-color: ${({ variant }) => {
    switch (variant) {
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

  font-size: 16px;
  font-weight: 500;

  box-shadow:
    0px 2px 3px 0px rgba(0, 0, 0, 0.17),
    0px 0px 3px 0px rgba(0, 0, 0, 0.08);

  &:active {
    filter: brightness(95%);
  }
`;

const IconWrapper = styled.div`
  ${flexbox({ dir: 'column', jc: 'center', ai: 'center' })}
  margin-right: 15px;
`;
const TextWrapper = styled.div`
  ${flexbox({ dir: 'column', jc: 'center', ai: 'center' })}
`;

const SocialLoginButton = ({
  text,
  variant,
  className,
  iconKey,
  ...buttonAttr
}: ButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  let textColor = '#000';
  if (variant === 'naver') {
    textColor = '#fff';
  }
  const handleSocialLogin = () => {
    // TODO: 소셜 로그인 이동
  };
  return (
    <StyledButton
      variant={variant}
      className={className}
      text={text}
      onClick={() => handleSocialLogin()}
      {...buttonAttr}
    >
      {iconKey && (
        <IconWrapper>
          <Icon
            iconName={iconKey}
            iconSize="small"
            color={textColor}
          />
        </IconWrapper>
      )}
      <TextWrapper>
        <Text textSize="small" textColor={textColor}>
          {text}
        </Text>
      </TextWrapper>
    </StyledButton>
  );
};

export default SocialLoginButton;
