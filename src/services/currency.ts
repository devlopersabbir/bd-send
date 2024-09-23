import axios from "axios";
import { CurrencyCode } from "@/utils";
import { CurrencyResponse } from "@/@types";

type RequestParams = {
  base_currency: CurrencyCode;
  currencies: CurrencyCode;
};
type CallParams = {
  endpoint: string;
  params: RequestParams;
};

class Currency {
  private api_key: string;
  private api_url: string;

  constructor() {
    this.api_key =
      "fca_live_gQR1fHhRRRXR2Js9swo6DEffmbMmnJlCfqOLbo52"; /** need to be store on **(dotenv)** file */
    this.api_url = "https://api.currencyapi.com/v3";
  }

  /**
   *
   */
  private async call(prms: CallParams): Promise<CurrencyResponse> {
    const url = this.paramsStringGenerator(prms);
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error: any) {
      throw new Error("Fail to fetch latest currency!");
    }
  }
  public latest(params: RequestParams) {
    return this.call({
      endpoint: "latest",
      params,
    });
  }
  private paramsStringGenerator({ endpoint, params }: CallParams): string {
    return `${this.api_url}/${endpoint}?apikey=${this.api_key}&currencies=${params.currencies}&base_currency=${params.base_currency}`;
  }
}

export default new Currency();
