import styled from 'styled-components';

import { flexbox } from '@/styles/mixin';

import Icon from '../../atoms/Icon';
import Text from '../../atoms/Text';

type FavType = 'active' | 'none';
type SizeType = 'small' | 'medium' | 'large';

interface FavoriteProps {
  text?: string;
  background?: string;
  favType?: FavType;
  sizeType: SizeType;
}

const FavoriteWrapper = styled.div<FavoriteProps>`
  width: ${({ sizeType }) => {
    switch (sizeType) {
      case 'small':
        return '94px';
      case 'large':
        return '166px';
      default:
        return '166px';
    }
  }};

  height: ${({ sizeType }) => {
    switch (sizeType) {
      case 'small':
        return '70px';
      case 'medium':
        return '134px';
      case 'large':
        return `${Math.random() * 100 + 200}px`;
      default:
        return '166px';
    }
  }};

  border-radius: 5.5px;

  border: ${({ favType }) => {
    switch (favType) {
      case 'active':
        return '1.5px solid #fff';
      case 'none':
        return '1.5px dashed #fff';
      default:
        return '1.5px dashed #fff';
    }
  }};
  background-image: url(${({ background }) => background});

  background-size: cover;
  background-repeat: no-repeat;

  background-position: ${({ sizeType }) => {
    switch (sizeType) {
      case 'small':
        return 'center center';
      case 'large':
        return 'top';
      default:
        return 'center top';
    }
  }};
`;

const Favorite = styled.div<FavoriteProps>`
  ${flexbox({ jc: 'center', ai: 'center' })}
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 5.5px;

  background: linear-gradient(
    0deg,
    rgba(72, 69, 204, 0.58) 12.31%,
    rgba(255, 176, 158, 0.65) 99.54%
  );
`;

const TextWrapper = styled.div`
  margin-top: 5px;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
`;

const MiniFavorite = ({
  text,
  background,
  favType,
  sizeType,
}: FavoriteProps) => {
  const handleMiniFavorite = () => {
    // TODO (fav 삭제)
  };
  return (
    <FavoriteWrapper
      favType={favType}
      sizeType={sizeType}
      background={background}
    >
      {text ? (
        <Favorite favType={favType} sizeType={sizeType}>
          {sizeType === 'small' ? (
            <IconWrapper>
              <Icon
                iconName="close"
                iconSize="small"
                color="#fff"
                onClick={() => handleMiniFavorite()}
              />
            </IconWrapper>
          ) : undefined}
          <TextWrapper>
            <Text
              variant="title"
              textSize={sizeType}
              textColor="#fff"
              textType="bold"
            >
              {text}
            </Text>
          </TextWrapper>
        </Favorite>
      ) : (
        <Favorite sizeType={sizeType}>
          <TextWrapper>
            <Icon
              iconName="plus"
              iconSize="small"
              color="#fff"
            />
          </TextWrapper>
        </Favorite>
      )}
    </FavoriteWrapper>
  );
};
export default MiniFavorite;
