import axios from 'axios';

export const getAllPerformances = async () => {
  try {
    const response = await axios.get(
      `${process.env.API_URL}/performances`,
    );

    return response.data;
  } catch (err) {
    throw new Error('get all performances data fail');
  }
};

export const getPerformance = async (id: string) => {
  try {
    const response = await axios.get(
      `${process.env.API_URL}/performances/${id}`,
    );

    return response.data;
  } catch (err) {
    throw new Error('get performance data fail');
  }
};

export const getPerformanceNotice = async (id: string) => {
  try {
    const response = await axios.get(
      `${process.env.API_URL}/performanceContents?performanceId=${id}`,
    );

    return response.data.performanceContents;
  } catch (err) {
    throw new Error('get performance Notice data fail');
  }
};
