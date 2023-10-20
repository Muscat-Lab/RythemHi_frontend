import LoadingSpinner from '@/components/common/atoms/LoadingSpinner';
import Category from '@/components/common/organisms/Performance/Category';
import Content from '@/components/common/organisms/Performance/Content';
import TitleCard from '@/components/common/organisms/Performance/TitleCard';
import { CategoryData } from '@/constants/data';
import useGetPerformance from '@/hooks/Performances/useGetPerformance';
import { flexbox } from '@/styles/mixin';
import styled from 'styled-components';

const MainContentWrapper = styled.article`
  ${flexbox({ dir: 'column' })}
`;

const MainContent = ({ id }: { id: string }) => {
  const { performance, performanceLoading } =
    useGetPerformance(id);

  if (performanceLoading) {
    return <LoadingSpinner loadingSize="small" />;
  }

  return (
    performance && (
      <MainContentWrapper>
        <TitleCard
          posterImageUrl={performance.posterImageUrl}
        />
        <Category data={CategoryData} />
        <Content
          title={performance.title}
          begin={performance.begin}
          end={performance.end}
          scheduleText={performance.scheduleText}
          locationText={performance.locationText}
        />
      </MainContentWrapper>
    )
  );
};

export default MainContent;
