import { useRouter } from 'next/router';
import styled from 'styled-components';

import Icon from '../Icon';

type ButtonSize = 'small' | 'medium' | 'large';

interface BackButtonProps {
  buttonSize: ButtonSize;
}

const StyledBackButton = styled.button<BackButtonProps>`
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  width: auto;
  padding: 0;
  width: 24px;
  height: 24px;

  width: ${({ buttonSize }) => {
    switch (buttonSize) {
      case 'small':
        return '24px';
      case 'medium':
        return '32px';
      case 'large':
        return '48px';
      default:
        return '32px';
    }
  }};

  height: ${({ buttonSize }) => {
    switch (buttonSize) {
      case 'small':
        return '24px';
      case 'medium':
        return '32px';
      case 'large':
        return '48px';
      default:
        return '32px';
    }
  }};
`;

const BackButton = ({ buttonSize }: BackButtonProps) => {
  const router = useRouter();

  return (
    <StyledBackButton
      type="button"
      onClick={() => router.back()}
      aria-label="back button"
      buttonSize={buttonSize}
    >
      <Icon
        iconName="backButtonIcon"
        color="#000"
        iconSize={buttonSize}
      />
    </StyledBackButton>
  );
};

export default BackButton;
