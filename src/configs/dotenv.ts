import { config } from "dotenv";
import { TDotenv } from "@/@types";
config();

export const env: TDotenv = {
  CURRENCY_API_KEY: process.env.CURRENCY_API_KEY as string,
};
