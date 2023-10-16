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
