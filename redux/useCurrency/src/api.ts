import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// 비동기 함수
export const fetchCurrencyRates = async (): Promise<any> => {
  try {
    const response = await axios.get(`${API_BASE_URL}?app_id=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error('현재 환율을 가져오는데 실패했습니다.');
  }
};
