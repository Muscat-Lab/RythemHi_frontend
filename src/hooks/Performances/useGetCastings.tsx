import { useQuery } from '@tanstack/react-query';

import { getCastings } from '@/apis/performances';

const useGetCastings = (performanceId: string) => {
  const { data: castings, isLoading: castingsLoading } =
    useQuery(['getCastings'], () =>
      getCastings(performanceId),
    );

  return {
    castings,
    castingsLoading,
  };
};

export default useGetCastings;
