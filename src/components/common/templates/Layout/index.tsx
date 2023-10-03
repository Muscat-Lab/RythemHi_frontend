import React from 'react';
import styled from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutWrapper = styled.section`
  min-width: 390px;
  padding: 0 20px;
  margin: 0 auto;
`;

const Layout = ({ children }: LayoutProps) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);

export default Layout;
