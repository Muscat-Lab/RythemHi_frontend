import styled from 'styled-components';

import Grid from '@/components/common/atoms/Grid';
import Text from '@/components/common/atoms/Text';
import SocialLoginButton from '@/components/common/molecules/SocialLoginButton';
import { flexbox } from '@/styles/mixin';

const StartPageWrapper = styled.div`
  ${flexbox({ dir: 'column' })}
  width: 100%;
  height: 800px;

  background:
    linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    linear-gradient(
      180deg,
      rgba(251, 191, 190, 0.5) 2.64%,
      rgba(14, 12, 114, 0.5) 75.76%
    ),
    url('https://a.cdn-hotels.com/gdcs/production121/d1688/b022527b-c68d-4a3f-96b4-322f557dea34.jpg?impolicy=fcrop&w=1600&h=1066&q=medium'),
    lightgray -740.522px -296.305px / 445.941% 137.369%
      no-repeat;

  background-size: cover;
  background-position: center center;
`;

const TextWrapper = styled.div`
  ${flexbox({ jc: 'center', ai: 'center' })}
  ${flexbox({ dir: 'column' })}
`;

const ButtonWrapper = styled.div`
  ${flexbox({ jc: 'center', ai: 'center' })}
  margin-top: 150px;
  gap: 10px;
`;

export default function Start() {
  return (
    <StartPageWrapper>
      <TextWrapper style={{ marginTop: '150px' }}>
        <Text textSize="medium" textColor="#fff">
          Ticket Together
        </Text>
        <Text
          textSize="extraLarge"
          textType="bold"
          textColor="#fff"
        >
          TITO
        </Text>
        <Text textSize="medium" textColor="#fff">
          쉽고, 신속한 예매를 통해
        </Text>
        <Text textSize="medium" textColor="#fff">
          즐거움을 제공합니다.
        </Text>
      </TextWrapper>
      <ButtonWrapper>
        <Grid rows={3} columns={1}>
          <SocialLoginButton
            iconKey="kakao"
            variant="kakao"
            text="카카오로 계속하기"
          />
          <SocialLoginButton
            iconKey="naver"
            variant="naver"
            text="네이버로 계속하기"
          />
        </Grid>
      </ButtonWrapper>
      <TextWrapper>
        <Text textSize="extraSmall" textColor="#fff">
          회원가입시 서비스 이용약관과 개인정보 보호정책에
          동의하게 됩니다.
        </Text>
      </TextWrapper>
    </StartPageWrapper>
  );
}
