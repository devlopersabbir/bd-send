import { priceReducer } from "@/functions";
import { CurrencyCode } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ExchangeState {
  exchange_ammount: number | string;
  base_currency: CurrencyCode;
  converted_currency: CurrencyCode;
  profit_ammount?: number;
}

const initialState: ExchangeState = {
  exchange_ammount: 0,
  base_currency: CurrencyCode.USD,
  converted_currency: CurrencyCode.BDT,
  profit_ammount: 0,
};

export const ExchangeSlice = createSlice({
  name: "exchange",
  initialState,
  reducers: {
    store: (state, action: PayloadAction<ExchangeState>) => {
      state.base_currency = action.payload.base_currency;
      state.converted_currency = action.payload.converted_currency;
      state.exchange_ammount = action.payload.exchange_ammount;

      // called reduced5Parcent reducer
      const reducedAmmount = priceReducer(
        2,
        Number(action.payload.exchange_ammount)
      );
    state.profit_ammount = reducedAmmount;
    },
    reduce5Parcent: (
      state,
      action: PayloadAction<{
        parcent: number;
        ammount: number | string;
      }>
    ) => {
      // const reduced = priceReducer(
      //   action.payload.parcent,
      //   Number(action.payload.ammount)
      // );
      // console.log("state: ", state);
      // state.exchange_ammount = reduced;
    },
  },
});

// Action creators are generated for each case reducer function
export const { store, reduce5Parcent } = ExchangeSlice.actions;

export default ExchangeSlice.reducer;
