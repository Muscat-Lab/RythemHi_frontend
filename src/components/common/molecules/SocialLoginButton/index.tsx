import React from 'react';
import styled from 'styled-components';

import { flexbox } from '@/styles/mixin';
import { SVGIconKeys } from '@/utils/iconMap';

import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import Text from '../../atoms/Text';

type VariantType = 'kakao' | 'naver' | 'apple';

interface ButtonProps {
  variant?: VariantType;
  iconKey?: SVGIconKeys;
  text: string;
}

const IconWrapper = styled.div`
  ${flexbox({ dir: 'column', jc: 'center', ai: 'center' })}
  margin-right: 15px;
`;
const TextWrapper = styled.div`
  ${flexbox({ dir: 'column', jc: 'center', ai: 'center' })}
`;

const SocialLoginButton = ({
  variant,
  iconKey,
  text,
}: ButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  let textColor = '#000';
  if (variant === 'naver') {
    textColor = '#fff';
  }

  const handleLogin = () => {};
  return (
    <Button
      buttonSize="large"
      boldType="normal"
      variant={variant}
      onClick={() => handleLogin()}
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
    </Button>
  );
};

export default SocialLoginButton;
