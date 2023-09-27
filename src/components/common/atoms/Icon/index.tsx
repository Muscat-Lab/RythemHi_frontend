import React, { Suspense, useMemo } from 'react';

import SVGComponents, {
  SVGIconKeys,
} from '@/utils/iconMap';

type IconSize = 'small' | 'medium' | 'large';

interface IconProps {
  iconName: SVGIconKeys;
  color: string;
  iconSize: IconSize;
  className?: string;
}

const Icon = ({
  iconName,
  color,
  iconSize,
  className,
}: IconProps) => {
  const IconComponent = useMemo(
    () => SVGComponents[iconName],
    [iconName],
  );

  return (
    <Suspense fallback={<div>LoadingSpinner....</div>}>
      <IconComponent
        color={color}
        width={iconSize}
        height={iconSize}
        className={className}
      />
    </Suspense>
  );
};

export default Icon;
