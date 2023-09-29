import styled from 'styled-components';

import Icon from '@/components/common/atoms/Icon';
import { flexbox } from '@/styles/mixin';

const NavigationWrapper = styled.div`
  ${flexbox({ jc: 'flex-end' })}
  width: 100%;
`;

const IconWrapper = styled.div`
  ${flexbox({ jc: 'flex-end', ai: 'center' })}
  width: 100px;
`;

const Navigation = () => {
  const handleNotificationClick = () => {
    // TODO (call push alarm)
  };
  const handleSettingsClick = () => {
    // TODO (ex. redirect to mypage?)
  };

  return (
    <NavigationWrapper>
      <IconWrapper>
        <Icon
          iconName="notificationIcon"
          iconSize="small"
          color="grey040"
          onClick={handleNotificationClick}
        />
        <Icon
          iconName="settingsIcon"
          iconSize="small"
          color="grey040"
          onClick={handleSettingsClick}
        />
      </IconWrapper>
    </NavigationWrapper>
  );
};

export default Navigation;
