import { styled } from 'styled-components';
import { flexbox } from '@/styles/mixin';
import Icon from '@/components/common/atoms/Icon';
import { useRouter } from 'next/router';
import CircleIcon from '@/components/common/molecules/CircleIcon';

interface TitleCardProps {
  posterImageUrl: string;
}

const TitleCardWrapper = styled.div<{
  posterImageUrl: null | string;
}>`
  ${flexbox({ jc: 'center', ai: 'center' })}
  width: 100%;
  height: 247px;
  position: relative;
  background-image: url(${({ posterImageUrl }) =>
    posterImageUrl});

  cursor: pointer;
`;

const TitleCardBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, 0.5);
`;

const TitleCardInner = styled.div<{
  posterImageUrl: null | string;
}>`
  width: 182px;
  height: 100%;
  position: absolute;

  background-image: url(${({ posterImageUrl }) =>
    posterImageUrl});
`;

const CloseWrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 21px;
`;

const IconBox = styled.div`
  ${flexbox({})}
  gap: 4px;

  position: absolute;

  bottom: 11px;
  right: 21px;
`;

const TitleCard = ({ posterImageUrl }: TitleCardProps) => {
  const router = useRouter();

  return (
    <TitleCardWrapper posterImageUrl={posterImageUrl}>
      <TitleCardBackground />
      <CloseWrapper>
        <Icon
          iconName="close"
          iconSize="small"
          color="#fff"
          onClick={() => router.push('/')}
        />
      </CloseWrapper>
      <TitleCardInner posterImageUrl={posterImageUrl} />
      <IconBox>
        <CircleIcon
          circleIconSize="medium"
          isActive={false}
        >
          <Icon
            iconName="bellIcon"
            iconSize="medium"
            color="white"
          />
        </CircleIcon>
        <CircleIcon
          circleIconSize="medium"
          isActive={false}
        >
          <Icon
            iconName="heartIcon"
            iconSize="medium"
            color="white"
          />
        </CircleIcon>
      </IconBox>
    </TitleCardWrapper>
  );
};

export default TitleCard;
