import React from 'react';
import { styled } from 'styled-components';

type SizeType =
  | 'extraSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'extraLarge';

type BoldType = 'light' | 'normal' | 'bold';
type VariantType = 'title' | 'subTitle';

interface TextProps {
  children: React.ReactNode;
  textSize: SizeType;
  textType?: BoldType;
  variant?: VariantType;
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

  color: ${({ variant }) => {
    switch (variant) {
      case 'title':
        return '#1D232E';
      case 'subTitle':
        return '#8F8F8F';
      default:
        return '#1D232E';
    }
  }};
`;

const Text = ({
  children,
  textSize,
  textType,
  variant,
  className,
  ...textAttr
}: TextProps & React.HTMLAttributes<HTMLSpanElement>) => (
  <StyledText
    textSize={textSize}
    textType={textType}
    variant={variant}
    className={className}
    {...textAttr}
  >
    {children}
  </StyledText>
);

export default Text;
