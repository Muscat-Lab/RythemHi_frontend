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
        return '30px';
      case 'medium':
        return '40px';
      case 'large':
        return '50px';
      default:
        return '40px';
    }
  }};

  height: ${({ loadingSize }) => {
    switch (loadingSize) {
      case 'small':
        return '30px';
      case 'medium':
        return '40px';
      case 'large':
        return '50px';
      default:
        return '40px';
    }
  }};

  border: 2px solid #6d12cf;
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: 16px auto;
  animation: ${rotation} 2s linear infinite;
`;

const LoadingSpinner = ({ loadingSize }: LodingProps) => (
  <StyledSpinner loadingSize={loadingSize} />
);

export default LoadingSpinner;
