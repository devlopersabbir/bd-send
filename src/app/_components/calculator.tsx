"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useExchange } from "@/hooks";
import {
  useAppStore,
  useAppDispatch,
  useAppSelector,
} from "@/hooks/useExchangeStore";
import { currency } from "@/services";
import { RootState } from "@/store";
import { reduce5Parcent, store } from "@/store/slices";
import { Currency, CurrencyCode } from "@/utils";
import { useEffect, useState } from "react";

const Calculator = ({ data }: { data: Currency[] }) => {
  const { exchanged_ammount, profit_ammount, storeExchangeData } =
    useExchange();

  const [baseCurrency, setBaseCurrency] = useState<CurrencyCode>(
    CurrencyCode.USD
  );
  const [targetCurrency, setTargetCurrency] = useState<CurrencyCode>(
    CurrencyCode.EUR
  );
  const [amount, setAmount] = useState<string>("1");
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleExchange = async () => {
    setIsLoading(true);
    try {
      const res = await currency.latest({
        base_currency: baseCurrency,
        currencies: targetCurrency,
      });
      const rate = res.data[targetCurrency];

      const convertedAmount = (parseFloat(amount) * rate.value).toFixed(2);
      // update our redux store
      storeExchangeData(baseCurrency, targetCurrency, Number(convertedAmount));

      console.log({ profit_ammount });
      // to showing data set here...
      setResult(
        `${amount} ${baseCurrency} = ${exchanged_ammount} ${targetCurrency}`
      );
    } catch (err) {
      console.error(err);
      setResult("Error occurred during conversion");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div>
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Amount
        </label>
        <Input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
      </div>
      <div>
        <label
          htmlFor="baseCurrency"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          From (Base Currency)
        </label>
        <select
          id="baseCurrency"
          value={baseCurrency}
          onChange={(e) => setBaseCurrency(e.target.value as CurrencyCode)}
        >
          {data.map((item, i) => (
            <option value={item.code} key={i}>
              {item.code} - {item.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="targetCurrency"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          To (Target Currency)
        </label>
        <select
          id="targetCurrency"
          value={targetCurrency}
          onChange={(e) => setTargetCurrency(e.target.value as CurrencyCode)}
        >
          {data.map((item, i) => (
            <option value={item.code} key={i}>
              {item.code} - {item.name}
            </option>
          ))}
        </select>
      </div>
      <Button onClick={handleExchange} disabled={isLoading} className="w-full">
        {isLoading ? "Converting..." : "Convert"}
      </Button>
      {result && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <p className="text-center font-medium">{result}</p>
        </div>
      )}
    </>
  );
};
export default Calculator;
