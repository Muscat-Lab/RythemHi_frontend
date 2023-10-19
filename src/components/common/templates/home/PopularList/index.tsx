import LoadingSpinner from '@/components/common/atoms/LoadingSpinner';
import useGetAllPerformances from '@/hooks/Performances/useGetPerformances';
import Carousel from '@/components/common/templates/Carousel';
import ScheduleInfoCard from '@/components/common/organisms/home/ScheduleInfoCard';
import { PerformanceType } from '@/interface/performance';

const PopularList = () => {
  // 인기있는 공연 API로 대체 예정
  const { allPerformances, allPerformancesLoading } =
    useGetAllPerformances();

  if (allPerformancesLoading) {
    return <LoadingSpinner loadingSize="small" />;
  }

  return (
    allPerformances.performances && (
      <Carousel
        items={allPerformances.performances.map(
          ({
            id,
            posterImageUrl,
            begin,
            title,
            preBookingClosedAt,
          }: PerformanceType) => (
            <ScheduleInfoCard
              key={id}
              id={id}
              posterImageUrl={posterImageUrl}
              ticketOpenDate={begin}
              title={title}
              performanceDate={preBookingClosedAt}
            />
          ),
        )}
      />
    )
  );
};

export default PopularList;
