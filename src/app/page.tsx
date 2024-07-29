"use client";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { currency } from "@/services";
import { CurrencyCode } from "@/utils";
import { data } from "../../currency";

export default function Home() {
  const clickHandler = async () => {
    try {
      const res = await currency.latest({
        base_currency: CurrencyCode.USD,
        currencies: CurrencyCode.BDT,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <p>Base Currency</p>
      <Select>
        {data.map((item, index) => (
          <option value={item.code} key={item.code}>
            {item.code}
          </option>
        ))}
      </Select>
      <p>Currencies</p>
      <Select onValueChange={(value) => console.log(value)}>
        {data.map((item, index) => (
          <option value={item.code} key={item.code}>
            {item.code}
          </option>
        ))}
      </Select>
      <Button onClick={clickHandler}>Exchange</Button>
    </>
  );
}
