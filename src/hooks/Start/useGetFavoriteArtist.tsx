import { useInfiniteQuery } from '@tanstack/react-query';

import { getAllArtist } from '@/apis/startArtist';

const useGetFavoriteArtist = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery(
    ['AllArtist'],
    ({ pageParam = 0 }) => getAllArtist(10, pageParam),
    {
      getNextPageParam: (lastPage) =>
        Number(lastPage?.nextCursor),
    },
  );

  return {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
  };
};

export default useGetFavoriteArtist;
