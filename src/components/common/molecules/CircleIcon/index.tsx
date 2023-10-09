import React from 'react';
import styled from 'styled-components';

import { flexbox } from '@/styles/mixin';

interface CircleIconProps {
  children: React.ReactNode;
}

const CircleIconWrapper = styled.div`
  ${flexbox({ jc: 'center', ai: 'center' })}
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #1e1e1e;
`;

const CircleIcon = ({ children }: CircleIconProps) => (
  <CircleIconWrapper>{children}</CircleIconWrapper>
);

export default CircleIcon;
