import styled from 'styled-components';

import Icon from '@/components/common/atoms/Icon';
import Text from '@/components/common/atoms/Text';
import { inlineFlexbox } from '@/styles/mixin';
import { SVGIconKeys } from '@/utils/iconMap';

interface InfoTagProps {
  iconKey?: SVGIconKeys;
  color: string;
  bgColor: string;
  text: string;
}

const InfoTagWrapper = styled.div<{ bgColor: string }>`
  height: 28px;
  ${inlineFlexbox({ ai: 'center' })}
  gap: 2px;
  border: 1px solid ${({ bgColor }) => bgColor};
  border-radius: 50px;
  padding: 0 8.5px;
`;

const InfoTag = ({
  iconKey,
  color,
  bgColor,
  text,
}: InfoTagProps) => (
  <InfoTagWrapper bgColor={bgColor}>
    {iconKey && (
      <Icon
        iconName={iconKey}
        iconSize="small"
        color={color}
      />
    )}
    <Text textSize="small">{text}</Text>
  </InfoTagWrapper>
);

export default InfoTag;
