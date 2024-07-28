import { CurrencyCode } from "./enum";

// Define the structure of a currency object
export interface Currency {
  symbol: string;
  name: string;
  symbol_native: string;
  decimal_digits: number;
  rounding: number;
  code: string;
  name_plural: string;
}

// Define the type for the metadata
export interface Meta {
  last_updated_at: string; // ISO 8601 date string
}

// Define the type for each currency entry in the data
export interface CurrencyValue {
  code: CurrencyCode; // Currency code (e.g., "BDT")
  value: number; // The value of the currency
}

// Define the type for the overall data structure
export interface Data {
  [code: string]: CurrencyValue;
}
