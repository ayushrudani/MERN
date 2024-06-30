import { useEffect, useState } from "react";

function useCurrencyInfo(currency = "USD") {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://api.frankfurter.app/latest?base=${currency}`)
      .then((res) => res.json())
      .then((res) => setData(res.rates));
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
