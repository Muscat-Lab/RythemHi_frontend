import { useQuery } from '@tanstack/react-query';

import { getPerformanceNotice } from '@/apis/performances';

const useGetPerformanceNotice = (performanceId: string) => {
  const {
    data: performanceNotice,
    isLoading: performanceNoticeLoading,
  } = useQuery(['useGetPerformanceNotice'], () =>
    getPerformanceNotice(performanceId),
  );

  return {
    performanceNotice,
    performanceNoticeLoading,
  };
};

export default useGetPerformanceNotice;
