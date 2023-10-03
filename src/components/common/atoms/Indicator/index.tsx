import { useState } from 'react';
import styled from 'styled-components';

import { flexbox } from '@/styles/mixin';

interface IndicatorProps {
  nums: number;
  // eslint-disable-next-line no-unused-vars
  handleChangeCard: (clickedIdx: number) => void;
}

const IndicatorWrapper = styled.div`
  ${flexbox({})}
  width: 100%;
  gap: 4px;
`;
const StyledIndicator = styled.button<{
  isActive: boolean;
}>`
  width: ${({ isActive }) => (isActive ? 27 : 7)}px;
  height: 7px;
  border-radius: ${({ isActive }) =>
    isActive ? '4px' : '50%'};
  background: ${({ isActive }) =>
    isActive ? 'silver' : 'gray'};

  border: none;
  outline: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

const Indicator = ({
  nums,
  handleChangeCard,
}: IndicatorProps) => {
  const [count, setCount] = useState(0);

  const handleClickIndicator = (clickedIdx: number) => {
    setCount(clickedIdx);
    // 바코드 변경
    handleChangeCard(clickedIdx);
  };

  return (
    <IndicatorWrapper>
      {Array.from({ length: nums }).map((_, idx) => (
        <StyledIndicator
          key={`indicator-${idx + 1}번째`}
          isActive={count === idx}
          onClick={() => handleClickIndicator(idx)}
        />
      ))}
    </IndicatorWrapper>
  );
};

export default Indicator;
