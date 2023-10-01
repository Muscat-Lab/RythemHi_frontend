import Image from 'next/image';
import styled from 'styled-components';

import { flexbox } from '@/styles/mixin';

import Icon from '../Icon';

interface BarcodeProps {
  barcodeDataURL: string | null;
  expiryDate: string;
  regenerateBarcode: () => void;
}

const BarcodeWrapper = styled.div`
  ${flexbox({ dir: 'column', jc: 'center', ai: 'center' })}
  width: 364px;
  height: 83px;
  position: relative;

  border-radius: 0 0 10px 10px;
  padding: 9px 0;
`;

const BarcodeInfo = styled.div`
  ${flexbox({ ai: 'center' })}
  margin-top: 5px;
  letter-spacing: 3px;
`;

const Barcode = ({
  barcodeDataURL,
  expiryDate,
  regenerateBarcode,
}: BarcodeProps) => (
  <BarcodeWrapper>
    {barcodeDataURL && (
      <>
        <Image
          width={216}
          height={49.5}
          src={barcodeDataURL}
          alt="Ticket Barcode"
        />
        <BarcodeInfo>
          <span>{expiryDate}</span>
          {/* Icon 차후에 refresh icon으로 변경예정. */}
          <Icon
            iconName="searchIcon"
            iconSize="small"
            color="black"
            onClick={regenerateBarcode}
          />
        </BarcodeInfo>
      </>
    )}
  </BarcodeWrapper>
);
export default Barcode;
