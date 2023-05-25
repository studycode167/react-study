import { useEffect, useState } from "react";
import { fetchCurrencyRates } from "./api";

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
  const currencyRates = useCurrency();
  const [usdRate, setUsdRate] = useState<number | null>(null);
  const [jpyRate, setJpyRate] = useState<number | null>(null);
  const [cadRate, setCadRate] = useState<number | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  // 환율 업데이트
  useEffect(() => {
    if (currencyRates) {
      setUsdRate(currencyRates.USD);
      setJpyRate(currencyRates.JPY);
      setCadRate(currencyRates.CAD);
    }
  }, [currencyRates]);

  // 버튼 클릭 이벤트
  const handleButtonClick = () => {
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
    <div>
      <button onClick={handleButtonClick}>현재 환율 가져오기</button>
      <div>
        {/*조건부 렌더링 */}
        {isLoading ? (
          <p>로딩중...</p>
        ) : (
          <>
            {usdRate && <p>USD 환율: {usdRate}</p>}
            {jpyRate && <p>JPY 환율: {jpyRate}</p>}
            {cadRate && <p>CAD 환율: {cadRate}</p>}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
