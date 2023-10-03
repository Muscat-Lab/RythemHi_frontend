import type { Meta } from '@storybook/react';
import React from 'react';

import useBarcode from '@/hooks/useBarcode';

import Barcode from '.';

const meta: Meta<typeof Barcode> = {
  title: 'atoms/Barcode',
  component: Barcode,
};

export default meta;

export const CommonBarcode = () => {
  const { barcodeDataURL, expiryDate, regenerateBarcode } =
    useBarcode();

  return (
    <Barcode
      barcodeDataURL={barcodeDataURL}
      expiryDate={expiryDate}
      regenerateBarcode={regenerateBarcode}
    />
  );
};
