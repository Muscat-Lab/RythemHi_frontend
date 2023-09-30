import React, { Suspense, useMemo } from 'react';
import styled from 'styled-components';

import SVGComponents, {
  SVGIconKeys,
} from '@/utils/iconMap';

type IconSize = 'small' | 'medium' | 'large';

interface IconProps {
  iconName: SVGIconKeys;
  color: string;
  iconSize: IconSize;
  className?: string;
  onClick?: () => void;
}

type StyledIconProps = {
  iconSize: IconSize;
} & React.HTMLProps<HTMLButtonElement>;

const StyledIcon = styled.button<StyledIconProps>`
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  margin: 0;
  padding: 0;

  width: ${({ iconSize }) => {
    switch (iconSize) {
      case 'small':
        return '24px';
      case 'medium':
        return '32px';
      case 'large':
        return '64px';
      default:
        return '32px'; // 기본값
    }
  }};
  height: ${({ iconSize }) => {
    switch (iconSize) {
      case 'small':
        return '24px';
      case 'medium':
        return '32px';
      case 'large':
        return '64px';
      default:
        return '32px'; // 기본값
    }
  }};
`;

const Icon = ({
  iconName,
  color,
  iconSize,
  className,
  onClick,
}: IconProps) => {
  const IconComponent = useMemo(
    () => SVGComponents[iconName],
    [iconName],
  );

  return (
    <Suspense fallback={<div>LoadingSpinner....</div>}>
      <StyledIcon
        iconSize={iconSize}
        className={className}
        onClick={onClick}
      >
        <IconComponent stroke={color} />
      </StyledIcon>
    </Suspense>
  );
};

export default Icon;
