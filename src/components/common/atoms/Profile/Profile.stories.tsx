import type { Meta } from '@storybook/react';
import React from 'react';

import Profile from '.';

const meta: Meta<typeof Profile> = {
  title: 'atoms/Profile',
  component: Profile,
};

export default meta;

export const CommonProfile = {
  render: () => (
    <Profile
      profileSize="small"
      profileUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJZNktd2UyJL4WTIBTOXF3p-K7gwM13i2ivLC31WUMFEiBkkHkxwOT1EaL_BcZk0Q9n4&usqp=CAU"
    />
  ),
};
