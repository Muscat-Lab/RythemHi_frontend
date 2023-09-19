import React, { Suspense, useMemo } from 'react';

import SVGComponents, {
  SVGIconKeys,
} from '@/utils/iconMap';

interface IconProps {
  iconName: SVGIconKeys;
  color: string;
  size: number;
  className?: string;
}

const Icon = ({
  iconName,
  color,
  size,
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
        width={size}
        height={size}
        className={className}
      />
    </Suspense>
  );
};

export default Icon;
