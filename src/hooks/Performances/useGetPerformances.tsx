import { useQuery } from '@tanstack/react-query';

import { getAllPerformances } from '@/apis/performances';

const useGetAllPerformances = () => {
  const {
    data: allPerformances,
    isLoading: allPerformancesLoading,
  } = useQuery(['getAllPerformances'], () =>
    getAllPerformances(),
  );

  return {
    allPerformances,
    allPerformancesLoading,
  };
};

export default useGetAllPerformances;
