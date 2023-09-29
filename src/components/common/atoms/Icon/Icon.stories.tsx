import type { Meta } from '@storybook/react';

import Icon from '.';

const meta: Meta<typeof Icon> = {
  title: 'atoms/Icon',
  component: Icon,
};

export default meta;

const PrimitiveSVGIcons = () => {
  // eslint-disable-next-line no-console
  const handleIconClick = () => console.log('clicked Icon');
  return (
    <>
      <Icon
        iconName="homeIcon"
        iconSize="small"
        color="grey040"
        onClick={handleIconClick}
      />
      <Icon
        iconName="searchIcon"
        iconSize="small"
        color="grey040"
      />
    </>
  );
};

export const PrimarySVG = {
  render: () => <PrimitiveSVGIcons />,
};
