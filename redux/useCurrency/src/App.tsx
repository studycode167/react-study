import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store';
import { setText } from './redux/reducer';
import { useEffect, useState } from 'react';
import { fetchCurrencyRates } from './api';
import { Button, Box, TextField } from '@mui/material';

import './style.css';

// customhook 정의
const useCurrency = () => {
  const [currencyRates, setCurrencyRates] = useState<any>(null);

  //첫 화면에 렌더링될 때
  useEffect(() => {
    // 비동기 함수 호출
    const fetchRates = async () => {
      try {
        const data = await fetchCurrencyRates();
        setCurrencyRates(data.rates);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRates();
  }, []);

  return currencyRates;
};

function App() {
  // input text
  const text = useSelector((state: RootState) => state.app.text);
  const dispatch = useDispatch();

  // textfield State
  const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;
    dispatch(setText(newText));
  };

  // 보내기 버튼
  const handleSendClick = () => {
    console.log(text);
  };

  // useCurrency
  const currencyRates = useCurrency();
  const [usdRate, setUsdRate] = useState<number | null>(null);
  const [jpyRate, setJpyRate] = useState<number | null>(null);
  const [cadRate, setCadRate] = useState<number | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  // 환율 갱신 버튼
  const handleRenewalClick = () => {
    if (currencyRates) {
      setLoading(true);
      setCadRate(currencyRates.CAD);
      setJpyRate(currencyRates.JPY);
      setUsdRate(currencyRates.USD);

      // 1초뒤 나타나게
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <Box>
      <Box height="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <TextField className="custom-textfield" value={text} onChange={handleTextFieldChange} />
        <Box marginTop="20px">
          <Button variant="contained" onClick={handleSendClick}>
            보내기
          </Button>
        </Box>
        <Box marginTop="20px">
          <Button variant="contained" onClick={handleRenewalClick}>
            현재 환율 가져오기
          </Button>
        </Box>
        {isLoading ? (
          <p>로딩중...</p>
        ) : (
          <>
            {usdRate && <p>USD 환율: {usdRate}</p>}
            {jpyRate && <p>JPY 환율: {jpyRate}</p>}
            {cadRate && <p>CAD 환율: {cadRate}</p>}
          </>
        )}
      </Box>
    </Box>
  );
}

export default App;
