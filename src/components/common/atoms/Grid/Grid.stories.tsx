import type { Meta } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import Text from '../Text';

import Grid from '.';

const meta: Meta<typeof Grid> = {
  title: 'atoms/Grid',
  component: Grid,
};

export default meta;

export const StyledButton = styled(Button)`
  background: linear-gradient(
    180deg,
    #232323 0%,
    rgba(35, 35, 35, 0.26) 100%
  );
`;

const CommonGrid = () => (
  <Grid rows={2} columns={3}>
    <StyledButton buttonSize="small">
      <Text textSize="extraSmall">힙합/랩</Text>
    </StyledButton>
    <StyledButton buttonSize="small">
      <Text textSize="extraSmall">R&B</Text>
    </StyledButton>
    <StyledButton buttonSize="small">
      <Text textSize="extraSmall">내한공연</Text>
    </StyledButton>
    <StyledButton buttonSize="small">
      <Text textSize="extraSmall">발라드</Text>
    </StyledButton>
    <StyledButton buttonSize="small">
      <Text textSize="extraSmall">인디밴드</Text>
    </StyledButton>
    <StyledButton buttonSize="small">
      <Text textSize="extraSmall">재즈&소울</Text>
    </StyledButton>
  </Grid>
);

export const SignIn = {
  render: () => <CommonGrid />,
};
