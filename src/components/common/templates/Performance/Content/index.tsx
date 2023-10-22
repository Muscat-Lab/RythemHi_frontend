import Text from '@/components/common/atoms/Text';
import { flexbox } from '@/styles/mixin';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import NoticeContent from '../Notice';

interface ContentProps {
  performanceId: string;
  activeIdx: number;
}

const ContentContainer = styled.section`
  ${flexbox({ dir: 'column' })}
  gap: 14px;
`;

const ContentWrapper = styled.div`
  min-height: 350px;
  padding: 20px;
  border-radius: 10px;
  background: #1e1e1e;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
`;

const RuleContent = () => {
  return <div>RuleContent...</div>;
};

const Content = ({
  performanceId,
  activeIdx,
}: ContentProps) => {
  const [title, setTitle] = useState('');

  const drawContent = () => {
    switch (activeIdx) {
      case 0:
        return (
          <NoticeContent performanceId={performanceId} />
        );
      case 2:
        return <RuleContent />;
    }
  };

  useEffect(() => {
    switch (activeIdx) {
      case 0:
        setTitle('공지사항');
      case 1:
        setTitle('공연장 정보');
      case 2:
        setTitle('예매 취소 수수료 타임라인');
    }
  }, []);

  return (
    <ContentContainer>
      <Text textColor="#fff" textSize="medium">
        {title}
      </Text>
      <ContentWrapper>{drawContent()}</ContentWrapper>
    </ContentContainer>
  );
};

export default Content;
