import { Currency, CurrencyCode, Data, Meta } from "@/utils";

export type CurrencyData = {
  [key in CurrencyCode]: Currency;
};

// Define the type for the entire response
export type CurrencyResponse = {
  meta: Meta;
  data: Data;
};
