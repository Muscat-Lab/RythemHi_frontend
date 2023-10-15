import React from 'react';
import styled from 'styled-components';

import { flexbox } from '@/styles/mixin';

type SizeType = 'small' | 'medium' | 'large';
interface CircleIconProps {
  circleIconSize: SizeType;
  isActive: boolean;
  children: React.ReactNode;
}

const CircleIconWrapper = styled.div<{
  circleIconSize: SizeType;
  isActive: boolean;
}>`
  ${flexbox({ jc: 'center', ai: 'center' })}
  border-radius: 50%;
  background: #1e1e1e;
  cursor: pointer;

  width: ${({ circleIconSize }) => {
    switch (circleIconSize) {
      case 'small':
        return '20px';
      case 'medium':
        return '30px';
      case 'large':
        return '40px';
      default:
        return '30px';
    }
  }};

  height: ${({ circleIconSize }) => {
    switch (circleIconSize) {
      case 'small':
        return '20px';
      case 'medium':
        return '30px';
      case 'large':
        return '40px';
      default:
        return '30px';
    }
  }};
`;

const CircleIcon = ({
  circleIconSize,
  isActive,
  children,
}: CircleIconProps) => {
  return (
    <CircleIconWrapper
      circleIconSize={circleIconSize}
      isActive={isActive}
    >
      {children}
    </CircleIconWrapper>
  );
};

export default CircleIcon;
