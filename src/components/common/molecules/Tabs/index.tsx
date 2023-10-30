import styled from 'styled-components';

import { flexbox } from '@/styles/mixin';
import { useState } from 'react';
import Text from '../../atoms/Text';

interface TabsProps {
  tabItems: string[];
  activeIdx: number;
  onClick: () => void;
}

const TabsWrapper = styled.div`
  ${flexbox({ jc: 'space-between' })}
  width: 100%;
`;

const TabWrapper = styled.div<{ isActive: boolean }>`
  ${flexbox({ ai: 'center' })}
  border-bottom: 2px solid ${({ isActive }) =>
    isActive ? '#4845cc' : 'transparent'};
`;

const Tab = styled.button`
  outline: none;
  border: none;
  padding-bottom: 10px;
  background: transparent;
  cursor: pointer;
`;

const Tabs = ({
  tabItems,
  activeIdx,
  onClick,
}: TabsProps) => {
  const [currentIdx, setCurrentIdx] = useState(2);

  const handleClickTab = (idx: number) => {
    setCurrentIdx(idx);
    onClick();
  };

  return (
    <TabsWrapper>
      {tabItems.map((item, idx) => {
        const isActive = currentIdx === idx;

        return (
          <TabWrapper key={item} isActive={isActive}>
            <Tab onClick={() => handleClickTab(idx)}>
              <Text
                textSize="small"
                textColor={isActive ? '#fff' : '#616161'}
              >
                {item}
              </Text>
            </Tab>
          </TabWrapper>
        );
      })}
    </TabsWrapper>
  );
};

export default Tabs;
