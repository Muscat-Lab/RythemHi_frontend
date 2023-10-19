import styled from 'styled-components';

import Icon from '@/components/common/atoms/Icon';
import Text from '@/components/common/atoms/Text';
import CircleIcon from '@/components/common/molecules/CircleIcon';
import { flexbox } from '@/styles/mixin';

interface PopularInfoCardProps {
  id: string;
  currentIdx: number;
  posterImageUrl: null | string;
  title: string;
  performanceDate: string;
  location: string;
}

const PopularInfoCardWrapper = styled.div<{
  posterImageUrl: null | string;
}>`
  width: 190px;
  height: 200px;
  padding: 12px;
  position: relative;

  background-image: url(${({ posterImageUrl }) =>
    posterImageUrl});
  background-size: cover;
  border-radius: 10px;
  cursor: pointer;
`;

const TopBox = styled.div`
  ${flexbox({ jc: 'center', ai: 'center' })}
  position: absolute;
  top: 0;
  left: 0;

  width: 44px;
  height: 38px;
  border-radius: 4px 0 4px 0;
  background: #1e1e1e;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.2);

  color: #fff;

  font-size: 16px;
  font-weight: 700;
`;

const ContentBox = styled.div`
  ${flexbox({ jc: 'space-between', ai: 'flex-end' })}
  height: 100%;
`;

const TextBox = styled.div`
  ${flexbox({ dir: 'column' })}
  gap: 4px;
`;

const IconBox = styled.div`
  ${flexbox({})}
  gap: 4px;
`;

const PopularInfoCard = ({
  id,
  currentIdx,
  posterImageUrl,
  title,
  performanceDate,
  location,
}: PopularInfoCardProps) => (
  <PopularInfoCardWrapper
    data-id={id}
    posterImageUrl={posterImageUrl}
    // onClick={() => console.log(`go ${id} router`)}
  >
    <TopBox>{currentIdx}</TopBox>
    <ContentBox>
      <TextBox>
        <Text textSize="medium" textColor="white">
          {title}
        </Text>
        <Text textSize="extraSmall" textColor="white">
          {performanceDate}
        </Text>
        <Text textSize="extraSmall" textColor="white">
          {location}
        </Text>
      </TextBox>
      <IconBox>
        <CircleIcon circleIconSize="small" isActive={false}>
          <Icon
            iconName="heartIcon"
            iconSize="small"
            color="white"
          />
        </CircleIcon>
      </IconBox>
    </ContentBox>
  </PopularInfoCardWrapper>
);

export default PopularInfoCard;
