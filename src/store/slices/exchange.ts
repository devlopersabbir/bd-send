import { priceReducer } from "@/functions";
import { CurrencyCode } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ExchangeState {
  exchange_rate: number | string;
  base_currency: CurrencyCode;
  converted_currency: CurrencyCode;
}

const initialState: ExchangeState = {
  exchange_rate: 0,
  base_currency: CurrencyCode.USD,
  converted_currency: CurrencyCode.BDT,
};

export const ExchangeSlice = createSlice({
  name: "exchange",
  initialState,
  reducers: {
    reduce5Parcent: (state, action: PayloadAction<number | string>) => {
      state.exchange_rate = priceReducer(5, Number(action.payload));
    },
  },
});

// Action creators are generated for each case reducer function
export const { reduce5Parcent } = ExchangeSlice.actions;

export default ExchangeSlice.reducer;
