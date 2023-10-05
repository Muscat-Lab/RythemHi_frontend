import styled from 'styled-components';

import { flexbox } from '@/styles/mixin';

import Icon from '../../atoms/Icon';
import Text from '../../atoms/Text';

type FavType = 'active' | 'none';

interface FavoriteProps {
  text?: string;
  background?: string;
  favType?: FavType;
}

const FavoriteWrapper = styled.div<FavoriteProps>`
  width: 94px;
  height: 70px;
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
  background-position: center;
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
}: FavoriteProps) => {
  const handleMiniFavorite = () => {
    // TODO (fav 삭제)
  };
  return (
    <FavoriteWrapper
      favType={favType}
      background={background}
    >
      {text ? (
        <Favorite favType={favType}>
          <IconWrapper>
            <Icon
              iconName="close"
              iconSize="small"
              color="#fff"
              onClick={() => handleMiniFavorite()}
            />
          </IconWrapper>
          <TextWrapper>
            <Text
              variant="title"
              textSize="small"
              textColor="#fff"
              textType="bold"
            >
              {text}
            </Text>
          </TextWrapper>
        </Favorite>
      ) : (
        <Favorite>
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
