import axios from "axios";

const API_KEY = "0e729a21790d4ce087517200b8acfcdc";

const API_BASE_URL = "https://openexchangerates.org/api/latest.json";

// 비동기 함수
export const fetchCurrencyRates = async (): Promise<any> => {
  try {
    const response = await axios.get(`${API_BASE_URL}?app_id=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error("현재 환율을 가져오는데 실패했습니다.");
  }
};
