import LoadingSpinner from '@/components/common/atoms/LoadingSpinner';
import ScheduleInfoCard from '@/components/common/organisms/home/ScheduleInfoCard';
import Carousel from '@/components/common/templates/Carousel';
import useGetAllPerformances from '@/hooks/Performances/useGetPerformances';
import { PerformanceType } from '@/interface/performance';

const ScheduleList = () => {
  const { allPerformances, allPerformancesLoading } =
    useGetAllPerformances();

  if (allPerformancesLoading) {
    return <LoadingSpinner loadingSize="small" />;
  }

  console.log(allPerformances.performances);

  return (
    // Server CORS 해결 이후 allPerformances로 데이터 교체 예정.
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
export default ScheduleList;
