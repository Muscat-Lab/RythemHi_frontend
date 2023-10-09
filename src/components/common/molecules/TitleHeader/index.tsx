import styled from 'styled-components';

import Text from '@/components/common/atoms/Text';
import { flexbox } from '@/styles/mixin';

import Icon from '../../atoms/Icon';

interface TitleHeaderProps {
  title: string;
  handleGoToRouter: () => void;
}

const TitleHeaderWrapper = styled.div`
  ${flexbox({ jc: 'space-between' })}
`;

const TitleHeader = ({
  title,
  handleGoToRouter,
}: TitleHeaderProps) => (
  <TitleHeaderWrapper>
    <Text textSize="medium" textColor="#fff">
      {title}
    </Text>
    <Icon
      // TODO: Icon 변경 예정
      iconName="searchIcon"
      color="white"
      iconSize="small"
      onClick={handleGoToRouter}
    />
  </TitleHeaderWrapper>
);

export default TitleHeader;
