import type { Meta } from '@storybook/react';

import Icon from '.';

const meta: Meta<typeof Icon> = {
  title: 'atoms/Icon',
  component: Icon,
};

export default meta;

const PrimitiveSVGIcons = () => (
  <>
    <Icon iconName="homeIcon" size={32} color="grey040" />
    <Icon iconName="searchIcon" size={32} color="grey040" />
  </>
);

export const PrimarySVG = {
  render: () => <PrimitiveSVGIcons />,
};
