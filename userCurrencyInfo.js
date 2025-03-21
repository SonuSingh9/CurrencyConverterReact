import { useEffect, useState } from "react";

export default function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    console.log(currency+">>>>>>>>>>>Currency");

    useEffect(() => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => setData(res.rates)) 
            .catch((error) => console.error("Error fetching currency data:", error));
    }, [currency]);

    return data;
}


