"use client";
import { CurrencyCode } from "@/utils";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./useExchangeStore";
import { store } from "@/store/slices";
import { RootState } from "@/store";

export const useExchange = () => {
  const appDispatch = useAppDispatch();
  const appStore = useAppSelector((state: RootState) => state.exchange);
  const [profit_ammount, setProfit_ammount] = useState<number>(0);
  const [exchanged_ammount, setExchange_ammount] = useState<number>(0);

  const storeExchangeData = (
    base_currency: CurrencyCode,
    converted_currency: CurrencyCode,
    exchange_ammount: number
  ) => {
    appDispatch(
      store({
        base_currency,
        converted_currency,
        exchange_ammount,
      })
    );
  };
  useEffect(() => {
    setExchange_ammount(Number(appStore.exchange_ammount));
    setProfit_ammount(Number(appStore.profit_ammount));
  }, [appStore]);

  return {
    profit_ammount,
    exchanged_ammount,
    storeExchangeData,
  };
};
