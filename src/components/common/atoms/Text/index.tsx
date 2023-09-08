import React from 'react';
import { styled } from 'styled-components';

type SizeType =
  | 'extraSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'extraLarge';

type BoldType = 'light' | 'normal' | 'bold';

interface TextProps {
  children: React.ReactChild;
  textSize: SizeType;
  textType?: BoldType;
  className?: string;
}

const StyledText = styled.span<TextProps>`
  display: inline-block;

  font-size: ${({ textSize }) => {
    switch (textSize) {
      case 'extraSmall':
        return '10px';
      case 'small':
        return '15px';
      case 'medium':
        return '20px';
      case 'large':
        return '25px';
      case 'extraLarge':
        return '30px';
      default:
        return '20px';
    }
  }};

  font-weight: ${({ textType }) => {
    switch (textType) {
      case 'light':
        return '200';
      case 'normal':
        return '400';
      case 'bold':
        return '800';
      default:
        return '400';
    }
  }};
`;

const Text = ({
  children,
  textSize,
  className,
  ...textAttr
}: TextProps & React.HTMLAttributes<HTMLSpanElement>) => (
  <StyledText
    textSize={textSize}
    className={className}
    {...textAttr}
  >
    {children}
  </StyledText>
);

export default Text;
