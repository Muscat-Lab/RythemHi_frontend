import styled from 'styled-components';

import Icon from '@/components/common/atoms/Icon';
import Text from '@/components/common/atoms/Text';
import CircleIcon from '@/components/common/molecules/CircleIcon';
import { flexbox } from '@/styles/mixin';

interface ScheduleInfoCardProps {
  id: number;
  bgPath: string;
  ticketOpenDate: string;
  title: string;
  performanceDate: string;
}

const ScheduleInfoCardWrapper = styled.div<{
  bgPath: string;
}>`
  width: 190px;
  height: 200px;
  padding: 12px;

  background-image: url(${({ bgPath }) => bgPath});
  background-size: cover;
  border-radius: 10px;
  cursor: pointer;
`;

const TopBox = styled.div`
  ${flexbox({ jc: 'center' })}
`;

const ContentBox = styled.div`
  ${flexbox({ jc: 'space-between', ai: 'flex-end' })}
  height: calc(100% - 12px);
`;

const TextBox = styled.div`
  ${flexbox({ dir: 'column' })}
  gap: 10px;
`;

const IconBox = styled.div`
  ${flexbox({})}
  gap: 4px;
`;

const ScheduleInfoCard = ({
  id,
  bgPath,
  ticketOpenDate,
  title,
  performanceDate,
}: ScheduleInfoCardProps) => (
  <ScheduleInfoCardWrapper
    data-id={id}
    bgPath={bgPath}
    // onClick={() => console.log(`go ${id} router`)}
  >
    <TopBox>
      <Text textSize="extraSmall" textColor="white">
        {ticketOpenDate}
      </Text>
    </TopBox>
    <ContentBox>
      <TextBox>
        <Text textSize="medium" textColor="white">
          {title}
        </Text>
        <Text textSize="extraSmall" textColor="white">
          {performanceDate}
        </Text>
      </TextBox>
      <IconBox>
        <CircleIcon>
          <Icon
            iconName="bellIcon"
            iconSize="small"
            color="white"
          />
        </CircleIcon>
        <CircleIcon>
          <Icon
            iconName="heartIcon"
            iconSize="small"
            color="white"
          />
        </CircleIcon>
      </IconBox>
    </ContentBox>
  </ScheduleInfoCardWrapper>
);

export default ScheduleInfoCard;
