import axios from "axios";
import { useEffect, useState } from "react";

function useCurrencyInfo(currency: string) {
  const [data, setData] = useState<Record<string, number>>({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const API = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency.toLowerCase()}.json`;

        const res = await axios.get(API);

        setData(res.data[currency]);
      } catch (error) {
        console.error("Error fetching currency data:", error);
      }
    };
    fetchData();
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
