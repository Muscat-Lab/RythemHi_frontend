import { useState } from 'react';
import styled from 'styled-components';

import { flexbox } from '@/styles/mixin';

import Icon from '../../atoms/Icon';
import Text from '../../atoms/Text';

type FavType = 'active' | 'none';
type SizeType = 'small' | 'medium' | 'large';

interface FavoriteProps {
  text?: string;
  favType?: FavType;
  sizeType: SizeType;
}

interface BackgroundProps {
  background?: string;
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
        return '300px';
      default:
        return '166px';
    }
  }};
  border-radius: 10px;

  border: ${({ favType, sizeType }) => {
    if (sizeType === 'small') {
      switch (favType) {
        case 'active':
          return '1.5px solid #fff';
        case 'none':
          return '1.5px dashed #fff';
        default:
          return '2.5px solid transparent';
      }
    } else {
      switch (favType) {
        case 'active':
          return '2.5px solid #fff';
        case 'none':
          return '2.5px solid transparent';
        default:
          return '2.5px solid transparent';
      }
    }
  }};
  box-sizing: border-box;
  position: relative;
`;

const BackgroundContainer = styled.div<BackgroundProps>`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-image: url(${({ background }) => background});
  background-size: cover;
  background-repeat: no-repeat;

  background-position: ${({ sizeType }) => {
    switch (sizeType) {
      case 'small':
        return 'center center';
      case 'large':
        return 'center';
      default:
        return 'center top';
    }
  }};
  box-sizing: border-box;
`;

const FavoriteContainer = styled.div<FavoriteProps>`
  ${flexbox({ jc: 'center', ai: 'center' })}
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;

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

const Favorite = ({
  text,
  favType,
  sizeType,
  background,
}: FavoriteProps & BackgroundProps) => {
  const [isFavoriteActive, setIsFavoriteActive] =
    useState(favType);

  const handleCloseFavorite = () => {
    // TODO (fav 삭제)
  };
  const handleFavorite = () => {
    // TODO (좋아요 선택)
    setIsFavoriteActive((prevFavType) =>
      prevFavType === 'active' ? 'none' : 'active',
    );
  }; //
  return (
    <FavoriteWrapper
      favType={isFavoriteActive}
      sizeType={sizeType}
      onClick={() =>
        sizeType !== 'small' ? handleFavorite() : undefined
      }
    >
      <BackgroundContainer
        background={background}
        sizeType={sizeType}
      >
        {text ? (
          <FavoriteContainer
            favType={isFavoriteActive}
            sizeType={sizeType}
          >
            {sizeType === 'small' && (
              <IconWrapper>
                <Icon
                  iconName="close"
                  iconSize="small"
                  color="#fff"
                  onClick={() => handleCloseFavorite()}
                />
              </IconWrapper>
            )}
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
          </FavoriteContainer>
        ) : (
          <FavoriteContainer sizeType={sizeType}>
            <TextWrapper>
              <Icon
                iconName="plus"
                iconSize="small"
                color="#fff"
              />
            </TextWrapper>
          </FavoriteContainer>
        )}
      </BackgroundContainer>
    </FavoriteWrapper>
  );
};

export default Favorite;
