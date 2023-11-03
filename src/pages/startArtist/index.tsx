import Masonry from '@mui/lab/Masonry';
import { useEffect, useMemo, useRef } from 'react';
import styled from 'styled-components';

import Button from '@/components/common/atoms/Button';
import Grid from '@/components/common/atoms/Grid';
import LoadingSpinner from '@/components/common/atoms/LoadingSpinner';
import Text from '@/components/common/atoms/Text';
import Favorite from '@/components/common/molecules/Favorite';
import useGetFavoriteArtist from '@/hooks/Start/useGetFavoriteArtist';
import { ArtistType } from '@/interface/startArtist';
import { flexbox } from '@/styles/mixin';

const StartArtistPageWrapper = styled.div`
  ${flexbox({ dir: 'column' })}
  position:relative;
  width: 100%;
  height: 880px;
  background: #111;
  background-size: cover;
  background-position: center center;
`;
const TitleWrapper = styled.div`
  ${flexbox({ jc: 'center', ai: 'center' })}
  width: 100%;
  margin-top: 20px;
  background-color: transparent;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
`;

const TopGradientWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  height: 130px;
  width: 100%;
  background: linear-gradient(
    0deg,
    rgba(17, 17, 17, 0) 14.85%,
    #111 56.72%
  );
`;

const LargeFavoriteWrapper = styled.div`
  position: relative;
  margin-top: 40px;
  height: 100%;
  width: 100%;
  padding: 0 10px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const LargeFavoriteInnerWrapper = styled.div`
  width: 50%;
`;
const SmallFavoriteWrapper = styled.div`
  ${flexbox({ jc: 'flex-start', ai: 'center' })}
  width: 330px;
  height: 100px;
  white-space: nowrap;
  margin: 0 12px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ButtonWrapper = styled.div`
  ${flexbox({ jc: 'center', ai: 'center' })}
  width: 100%;
  padding: 10px 0;
`;

export default function StartArtist() {
  // 선택된 데이터 담는 곳!
  const favoriteData = new Array(20)
    .fill(null)
    .map((_, index) => index);

  const target = useRef<HTMLDivElement | null>(null);

  const {
    data: artistResult,
    fetchNextPage,
    isLoading,
  } = useGetFavoriteArtist();

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        async () => {
          await fetchNextPage();
        },
        { threshold: 0.7 },
      ),
    [fetchNextPage],
  );

  useEffect(() => {
    const currentTarget = target.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [observer]);

  // TODO : 선택된 데이터 넘어가기..
  const onClickFav = (item: ArtistType) => {
    console.log(item);
  };

  return (
    <StartArtistPageWrapper>
      <TopGradientWrapper />
      <TitleWrapper>
        <Text
          textSize="medium"
          textColor="#fff"
          textType="bold"
        >
          선호하는 아티스트와 장르를 선택해주세요
        </Text>
      </TitleWrapper>

      <LargeFavoriteWrapper>
        <Masonry columns={2} spacing="3px">
          {(artistResult?.pages || []).map((paging: any) =>
            paging.choices.map((item: any) => {
              if (item.type === 'Performer') {
                return (
                  <LargeFavoriteInnerWrapper
                    key={item.id}
                    onClick={() => onClickFav(item)}
                  >
                    <Favorite
                      text={item.name}
                      sizeType={
                        item.name.length <= 2
                          ? 'large'
                          : 'extraLarge'
                      }
                      background={item.profileImageUrl}
                    />
                  </LargeFavoriteInnerWrapper>
                );
              }
              return (
                <LargeFavoriteInnerWrapper
                  key={item.id}
                  onClick={() => onClickFav(item)}
                >
                  <Favorite
                    text={item.name}
                    sizeType="medium"
                  />
                </LargeFavoriteInnerWrapper>
              );
            }),
          )}
        </Masonry>
        <div ref={target} />
        {isLoading && (
          <LoadingSpinner loadingSize="medium" />
        )}
      </LargeFavoriteWrapper>

      <SmallFavoriteWrapper>
        <Grid rows={1} columns={20}>
          {favoriteData.map((item) => (
            <Favorite
              sizeType="small"
              favType="none"
              key={item}
            />
          ))}
        </Grid>
      </SmallFavoriteWrapper>
      <ButtonWrapper>
        <Button buttonSize="large">완료</Button>
      </ButtonWrapper>
    </StartArtistPageWrapper>
  );
}
