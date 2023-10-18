// import Image from 'next/image';
import styled from 'styled-components';

// import Grid from '@/components/common/atoms/Grid';
import Button from '@/components/common/atoms/Button';
import Grid from '@/components/common/atoms/Grid';
// import Icon from '@/components/common/atoms/Icon';
import Text from '@/components/common/atoms/Text';
import { flexbox } from '@/styles/mixin';

const StartPushPageWrapper = styled.div`
  ${flexbox({ dir: 'column' })}
  width: 100%;
  height: 800px;
  background: #111;
  background-size: cover;
  background-position: center center;
`;

const TextWrapper = styled.div`
  ${flexbox({ jc: 'center', ai: 'center' })}
  ${flexbox({ dir: 'column' })}
  gap: 10px;
`;
const TextHeader = styled.div`
  margin: 0 0 21px 0;
`;

const IconWrapper = styled.div`
  ${flexbox({ jc: 'center', ai: 'center' })}
  width: 100%;
  height: 350px;
`;

const ButtonWrapper = styled.div`
  ${flexbox({ jc: 'center', ai: 'center' })}
  padding: 10px 0;
  width: 100%;
`;

export default function StartPush() {
  return (
    <StartPushPageWrapper>
      <TextWrapper style={{ marginTop: '150px' }}>
        <TextHeader>
          <Text
            textSize="large"
            textType="bold"
            textColor="#fff"
          >
            반가워요!
          </Text>
        </TextHeader>
        <Text textSize="medium" textColor="#fff">
          예매 사전등록부터
        </Text>
        <Text textSize="medium" textColor="#fff">
          공연 당일 팁까지, 모두 알려드릴게요.
        </Text>
      </TextWrapper>
      <IconWrapper>
        {/* <Image
          src="/image/alarm.png"
          alt="alarm"
          width={300}
          height={300}
        /> */}
        {/* <Icon
          iconName="alarm"
          color="#111"
          iconSize="extraLarge"
        /> */}
      </IconWrapper>
      <ButtonWrapper>
        <Grid rows={2} columns={1}>
          <Button buttonSize="large" boldType="bold">
            동의하고 알림받기
          </Button>
          <Button
            buttonSize="large"
            boldType="bold"
            variant="close"
          >
            닫기
          </Button>
        </Grid>
      </ButtonWrapper>
    </StartPushPageWrapper>
  );
}
