import { useRouter } from 'next/router';
import styled from 'styled-components';

import Icon from '@/components/common/atoms/Icon';
import Text from '@/components/common/atoms/Text';
import { flexbox } from '@/styles/mixin';

const BottomNavigationWrapper = styled.div`
  ${flexbox({ jc: 'space-between' })}
  gap: 44px;
  position: fixed;
  bottom: 0;
  background: #181818;
  padding: 12px 29px;
`;

const IconWrapper = styled.div`
  ${flexbox({ dir: 'column', jc: 'center', ai: 'center' })}
  gap: 4px;
`;

const BottomNavigation = () => {
  const router = useRouter();

  return (
    <BottomNavigationWrapper>
      <IconWrapper>
        <Icon
          iconName="homeIcon"
          iconSize="small"
          color="#AEAEAE"
          onClick={() => router.push('/')}
        />
        <Text variant="subTitle" textSize="extraSmall">
          홈
        </Text>
      </IconWrapper>
      <IconWrapper>
        <Icon
          iconName="searchIcon"
          iconSize="small"
          color="#AEAEAE"
          onClick={() => router.push('/search')}
        />
        <Text variant="subTitle" textSize="extraSmall">
          검색
        </Text>
      </IconWrapper>
      <IconWrapper>
        <Icon
          iconName="openExpectedIcon"
          iconSize="small"
          color="#AEAEAE"
          onClick={() => router.push('/schedule')}
        />
        <Text variant="subTitle" textSize="extraSmall">
          오픈예정
        </Text>
      </IconWrapper>
      <IconWrapper>
        <Icon
          iconName="mypageIcon"
          iconSize="small"
          color="#AEAEAE"
          onClick={() => router.push('/mypage')}
        />
        <Text variant="subTitle" textSize="extraSmall">
          마이페이지
        </Text>
      </IconWrapper>
    </BottomNavigationWrapper>
  );
};

export default BottomNavigation;
