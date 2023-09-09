import React from 'react';
import { styled, keyframes } from 'styled-components';

type SizeType = 'small' | 'medium' | 'large';

interface LodingProps {
  loadingSize: SizeType;
}

const rotation = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
     transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div<LodingProps>`
  width: ${({ loadingSize }) => {
    switch (loadingSize) {
      case 'small':
        return '40px';
      case 'medium':
        return '50px';
      case 'large':
        return '60px';
      default:
        return '50px';
    }
  }};

  height: ${({ loadingSize }) => {
    switch (loadingSize) {
      case 'small':
        return '40px';
      case 'medium':
        return '50px';
      case 'large':
        return '60px';
      default:
        return '50px';
    }
  }};

  border: 16px solid #f6f6f6;
  border-radius: 50%;
  border-top: 16px #6d12cf solid;
  margin: 16px auto;
  animation: ${rotation} 2s linear infinite;
`;

const LoadingSpinner = ({ loadingSize }: LodingProps) => (
  <StyledSpinner loadingSize={loadingSize} />
);

export default LoadingSpinner;
