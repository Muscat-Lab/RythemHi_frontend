import styled from 'styled-components';

import Barcode from '@/components/common/atoms/Barcode';
import Button from '@/components/common/atoms/Button';
import Grid from '@/components/common/atoms/Grid';
import Text from '@/components/common/atoms/Text';
import BottomNavigation from '@/components/common/molecules/BottomNavigation';
import Navigation from '@/components/common/molecules/Navigation';
import TitleHeader from '@/components/common/molecules/TitleHeader';
import BarcodeCard from '@/components/common/organisms/BarcodeCard';
import ScheduleList from '@/components/common/templates/home/ScheduleList';
import { categoryData } from '@/constants/data';
import useBarcode from '@/hooks/useBarcode';
import { flexbox } from '@/styles/mixin';
import PopularList from '@/components/common/templates/home/PopularList';

const HomePageWrapper = styled.section`
  ${flexbox({ dir: 'column' })}
  gap: 30px;
  margin-bottom: 80px;
`;

const BarcodeContainer = styled.article`
  margin: 0 auto;
`;

export default function Home() {
  const { barcodeDataURL, expiryDate, regenerateBarcode } =
    useBarcode();

  return (
    <HomePageWrapper>
      <Navigation />
      {barcodeDataURL && (
        <BarcodeContainer>
          <BarcodeCard />
          <Barcode
            barcodeDataURL={barcodeDataURL}
            expiryDate={expiryDate}
            regenerateBarcode={regenerateBarcode}
          />
        </BarcodeContainer>
      )}
      <Grid rows={2} columns={3}>
        {categoryData.map((category) => (
          <Button buttonSize="small" key={category}>
            <Text textSize="extraSmall" textColor="#fff">
              {category}
            </Text>
          </Button>
        ))}
      </Grid>
      <article style={{ width: '100%' }}>
        <TitleHeader
          title="티켓 오픈예정 리스트"
          handleGoToRouter={() =>
            console.log('go ticketing router')
          }
        />
        <ScheduleList />
      </article>
      <article style={{ width: '100%' }}>
        <TitleHeader
          title="지금 인기있는 공연"
          handleGoToRouter={() =>
            console.log('go popular router')
          }
        />
        <PopularList />
      </article>
      <BottomNavigation />
    </HomePageWrapper>
  );
}