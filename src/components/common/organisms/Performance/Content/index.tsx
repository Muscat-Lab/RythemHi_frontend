import Icon from '@/components/common/atoms/Icon';
import Text from '@/components/common/atoms/Text';
import { flexbox } from '@/styles/mixin';
import styled from 'styled-components';

interface ContentProps {
  title: string;
  begin: string;
  end: string;
  scheduleText: string;
  locationText: string;
}

const ContentWrapper = styled.div`
  ${flexbox({ dir: 'column' })}
  gap: 7px;
  padding: 0 21px;
`;

const TitleBox = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #fff;
`;

const RowBox = styled.div`
  ${flexbox({ ai: 'center' })}
  gap: 5px;
  font-size: 14px;
  font-weight: 400;
`;

const Content = ({
  title,
  begin,
  end,
  scheduleText,
  locationText,
}: ContentProps) => {
  return (
    <ContentWrapper>
      <TitleBox>{title}</TitleBox>
      <RowBox>
        <Icon
          iconName="place"
          color="#fff"
          iconSize="small"
        />
        <Text textSize="small" textColor="#fff">
          {begin} ~ {end}
        </Text>
      </RowBox>
      <RowBox>
        <Icon
          iconName="calendar"
          color="#fff"
          iconSize="small"
        />
        <Text textSize="small" textColor="#fff">
          {scheduleText}
        </Text>
      </RowBox>
      <RowBox>
        <Icon
          iconName="place"
          color="#fff"
          iconSize="small"
        />
        <Text textSize="small" textColor="#fff">
          {locationText}
        </Text>
      </RowBox>
    </ContentWrapper>
  );
};

export default Content;
