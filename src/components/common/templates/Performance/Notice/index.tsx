import { styled } from 'styled-components';
import useGetPerformanceNotice from '@/hooks/Performances/useGetPerformanceNotice';

import LoadingSpinner from '@/components/common/atoms/LoadingSpinner';

const NoticeContentWrapper = styled.ul``;

const NoticeItem = styled.li`
  margin: 21px 0;
  padding: 0;
  color: #fff;
`;

const NoticeContent = ({
  performanceId,
}: {
  performanceId: string;
}) => {
  const { performanceNotice, performanceNoticeLoading } =
    useGetPerformanceNotice(performanceId);

  if (performanceNoticeLoading) {
    return <LoadingSpinner loadingSize="medium" />;
  }

  return (
    performanceNotice && (
      <NoticeContentWrapper>
        {performanceNotice[0].content
          .split('\n')
          .map((sentence: string) => {
            return <NoticeItem>{sentence}</NoticeItem>;
          })}
      </NoticeContentWrapper>
    )
  );
};

export default NoticeContent;
