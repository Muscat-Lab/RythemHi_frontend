import React from 'react';
import styled from 'styled-components';

import { flexbox } from '@/styles/mixin';

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutWrapper = styled.section`
  ${flexbox({ jc: 'center', ai: 'center' })}
  width: 390px;
  padding: 0 20px;
  margin: 0 auto;
`;

const Layout = ({ children }: LayoutProps) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);

export default Layout;
