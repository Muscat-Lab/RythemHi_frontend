import LoadingSpinner from '@/components/common/atoms/LoadingSpinner';
import ScheduleInfoCard from '@/components/common/organisms/home/ScheduleInfoCard';
import Carousel from '@/components/common/templates/Carousel';
import { scheduleInfoListData } from '@/constants/data';
import useGetAllPerformances from '@/hooks/Performances/useGetPerformances';

const ScheduleList = () => {
  const { allPerformances, allPerformancesLoading } =
    useGetAllPerformances();

  if (allPerformancesLoading) {
    return <LoadingSpinner loadingSize="small" />;
  }

  return (
    // Server CORS 해결 이후 allPerformances로 데이터 교체 예정.
    allPerformances && (
      <Carousel
        items={scheduleInfoListData.map(
          ({
            id,
            bgPath,
            ticketOpenDate,
            title,
            performanceDate,
          }) => (
            <ScheduleInfoCard
              key={id}
              id={id}
              bgPath={bgPath}
              ticketOpenDate={ticketOpenDate}
              title={title}
              performanceDate={performanceDate}
            />
          ),
        )}
      />
    )
  );
};
export default ScheduleList;
