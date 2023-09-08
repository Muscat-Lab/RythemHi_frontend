import type { Meta } from '@storybook/react';

import LoadingSpinner from '.';

const meta: Meta<typeof LoadingSpinner> = {
  title: 'atoms/LoadingSpinner',
  component: LoadingSpinner,
};

export default meta;

const SmallLoadingComponent = () => (
  <LoadingSpinner loadingSize="small" />
);

export const SmallLoadingSpinner = {
  render: () => <SmallLoadingComponent />,
};

const MediumLoadingComponent = () => (
  <LoadingSpinner loadingSize="medium" />
);

export const MediumLoadingSpinner = {
  render: () => <MediumLoadingComponent />,
};
