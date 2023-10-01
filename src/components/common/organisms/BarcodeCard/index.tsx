import { useState } from 'react';
import styled from 'styled-components';

import barcodeCardImage from '@/assets/background/barcodeCard.png';
import Text from '@/components/common/atoms/Text';
import { flexbox } from '@/styles/mixin';

const BarcodeCardWrapper = styled.div`
  width: 364px;
  height: 160px;
  background-image: url(${barcodeCardImage.src});
  background-size: cover; // 이미지를 div의 크기에 맞게 조절
  background-position: center;

  padding: 14px;
  border-radius: 16px 16px 0 0;
`;

const BarcodeCardInner = styled.div`
  ${flexbox({ ai: 'flex-end' })}
  width: 364px;
  height: 160px;
`;

const CardBox = styled.div``;
const SubTitleBox = styled.div`
  ${flexbox({ dir: 'column' })}
  margin-top: 7px;
`;

const dummyData = [
  {
    id: 1,
    title: '2023 Emotion oranges 내한공연',
    subTitle1: '2023.07.12 (sat) 18:00PM',
    subTitle2: 'l pay saquare live hall',
  },
  {
    id: 2,
    title: '뮤지컬 〈레베카〉 10주년 기념공연',
    subTitle1: '2023.11.19 (sun) 18:00PM',
    subTitle2: '예매가능시간: 관람 4시간 전까지',
  },
];

const BarcodeCard = () => {
  // get cardData query

  // const [currentCount, setCurrentCount] = useState(0);
  const [cardData, setCardData] = useState(dummyData[0]);

  // const handleClickIndicator = (clickedIdx: number) => {
  //   setCurrentCount(clickedIdx);
  //   setCardData(dummyData[clickedIdx]);
  // };

  return (
    <BarcodeCardWrapper>
      {/* TODO: InfoTag 들어갈예정 */}
      <BarcodeCardInner>
        <CardBox>
          <Text textSize="small">{cardData.title}</Text>
          <SubTitleBox>
            <Text textSize="extraSmall">
              {cardData.subTitle1}
            </Text>
            <Text textSize="extraSmall">
              {cardData.subTitle2}
            </Text>
          </SubTitleBox>
        </CardBox>
      </BarcodeCardInner>

      {/* TODO: Indicator 들어갈 예정 */}
    </BarcodeCardWrapper>
  );
};

export default BarcodeCard;
