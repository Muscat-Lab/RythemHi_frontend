import styled from 'styled-components';

import Button from '@/components/common/atoms/Button';
import Grid from '@/components/common/atoms/Grid';
import Text from '@/components/common/atoms/Text';
import Favorite from '@/components/common/molecules/Favorite';
import { flexbox } from '@/styles/mixin';

const StartArtistPageWrapper = styled.div`
  ${flexbox({ dir: 'column' })}
  width: 100%;
  height: 800px;
  background: #111;
  background-size: cover;
  background-position: center center;
`;
const TitleWrapper = styled.div`
  ${flexbox({ jc: 'center', ai: 'center' })}
  width: 100%;
  margin-top: 50px;
`;

const TopGradientWrapper = styled.div`
  height: 270px;
  background: linear-gradient(
    0deg,
    rgba(17, 17, 17, 0) 14.85%,
    #111 56.72%
  );
`;

const BottomGradientWrapper = styled.div`
  height: 270px;
  background: linear-gradient(
    180deg,
    rgba(9, 9, 9, 0) 14.85%,
    #111 56.72%
  );
`;

const LargeFavoriteWrapper = styled.div`
  height: 100%;
`;
const SmallFavoriteWrapper = styled.div`
  ${flexbox({ jc: 'center', ai: 'center' })}
  width: 100%;
`;

const ButtonWrapper = styled.div`
  // layout 합쳐지고 다시 확인 필요
  ${flexbox({ jc: 'center', ai: 'center' })}
  width: 100%;
  padding: 10px 0;
`;

export default function StartArtist() {
  return (
    <StartArtistPageWrapper>
      <TitleWrapper>
        <Text textSize="medium" textColor="#fff">
          선호하는 아티스트와 장르를 선택해주세요.
        </Text>
      </TitleWrapper>
      <LargeFavoriteWrapper />
      <SmallFavoriteWrapper>
        <Grid rows={1} columns={3}>
          <Favorite
            text="Aminé"
            favType="active"
            sizeType="small"
            background="https://i.namu.wiki/i/OEKgiG-EKVByxF_x2ZdJ0VyaRCNmv-lGIoMR7fgKvWSP2zARUHOdD-vaHAVr65EKVR6Wy88xdZybivv_MYrIUg.webp"
          />
          <Favorite sizeType="small" favType="none" />
          <Favorite sizeType="small" favType="none" />
        </Grid>
      </SmallFavoriteWrapper>
      <ButtonWrapper>
        <Button buttonSize="large">완료</Button>
      </ButtonWrapper>
      <TopGradientWrapper />
      <BottomGradientWrapper />
    </StartArtistPageWrapper>
  );
}
