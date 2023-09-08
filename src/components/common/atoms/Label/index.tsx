import React from 'react';
import { styled } from 'styled-components';

type SizeType =
  | 'extraSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'extraLarge';

type BoldType = 'light' | 'normal' | 'bold';
type VariantType = 'success' | 'error';

interface LabelProps {
  children: React.ReactNode;
  labelSize: SizeType;
  labelType?: BoldType;
  variant?: VariantType;
  className?: string;
}

const StyledLabel = styled.label<LabelProps>`
  display: inline-block;
  line-height: 16px;
  font-size: ${({ labelSize }) => {
    switch (labelSize) {
      case 'extraSmall':
        return '5px';
      case 'small':
        return '10px';
      case 'medium':
        return '15px';
      case 'large':
        return '20px';
      case 'extraLarge':
        return '25px';
      default:
        return '15px';
    }
  }};

  font-weight: ${({ labelType }) => {
    switch (labelType) {
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
      case 'success':
        return 'green';
      case 'error':
        return 'red';
      default:
        return '#1D232E';
    }
  }};
`;

const Label = ({
  children,
  labelSize,
  labelType,
  variant,
  className,
  ...labelAttr
}: LabelProps & React.HTMLAttributes<HTMLLabelElement>) => (
  <StyledLabel
    labelSize={labelSize}
    labelType={labelType}
    variant={variant}
    className={className}
    {...labelAttr}
  >
    {children}
  </StyledLabel>
);

export default Label;
