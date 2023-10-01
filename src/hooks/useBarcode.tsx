import bwipjs from 'bwip-js';
import { useEffect, useState } from 'react';

type TicketData = {
  id: string;
  expiryDate: string;
};

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// API가 만들어지면 아래 getRandomDateTime 함수는 삭제 예정.
function getRandomDateTime(): string {
  const year = getRandomInt(2023, 2030);
  const month = getRandomInt(1, 12)
    .toString()
    .padStart(2, '0');
  const day = getRandomInt(1, 28)
    .toString()
    .padStart(2, '0'); // 최대값을 28로 설정하여 모든 달에서 유효한 날짜를 얻습니다.
  const hour = getRandomInt(0, 23)
    .toString()
    .padStart(2, '0');
  const minute = getRandomInt(0, 59)
    .toString()
    .padStart(2, '0');
  const second = getRandomInt(0, 59)
    .toString()
    .padStart(2, '0');

  return `${year}${month}${day}${hour}${minute}${second}`;
}

const useBarcode = () => {
  const [barcodeDataURL, setBarcodeDataURL] = useState<
    string | null
  >(null);

  const [ticketData, setTicketData] = useState<TicketData>({
    id: '1234567890',
    expiryDate: '20230706143699',
  });

  const generateBarcodeData = (text: string): string => {
    const canvas = document.createElement('canvas');
    bwipjs.toCanvas(canvas, {
      bcid: 'code128',
      textyoffset: 5,
      text,
      scale: 3,
      height: 10,
    });
    return canvas.toDataURL();
  };

  const regenerateBarcode = () => {
    // 여기에서 바코드 데이터를 변경하고 다시 생성합니다. -> 서버 api로 바코드 수정예정
    const newExpiryDate = getRandomDateTime();

    setTicketData((prev) => ({
      ...prev,
      expiryDate: newExpiryDate,
    }));
  };

  useEffect(() => {
    const dataURL = generateBarcodeData(
      ticketData.expiryDate,
    );
    setBarcodeDataURL(dataURL);
  }, [ticketData.expiryDate]);

  return {
    barcodeDataURL,
    expiryDate: ticketData.expiryDate,
    regenerateBarcode,
  };
};

export default useBarcode;
