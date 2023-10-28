import { useQuery } from '@tanstack/react-query';

import { getPerformance } from '@/apis/performances';

const useGetPerformance = (id: string) => {
  const {
    data: performance,
    isLoading: performanceLoading,
  } = useQuery(['useGetPerformance'], () =>
    getPerformance(id),
  );

  return {
    performance,
    performanceLoading,
  };
};

export default useGetPerformance;
