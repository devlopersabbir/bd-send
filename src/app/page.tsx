import { data } from "../../currency";
import Calculator from "./_components/calculator";

export default function CurrencyConverter() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Currency Converter
      </h1>
      <div className="space-y-4">
        <Calculator data={data} />
      </div>
    </div>
  );
}
