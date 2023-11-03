import axios from 'axios';

export const getAllArtist = async (
  limit: number,
  pageParam: number,
) => {
  try {
    const response = await axios.get(
      `${process.env.API_URL}/likes/choices?limit=${limit}&cursor=${pageParam}`,
    );
    return response.data;
  } catch (err) {
    throw new Error('get all artist data fail');
  }
};
