import { ExchangeRate } from "../types/ExchangeRate";
import { fetchExchangeRates } from "../apis/forexApi";

export async function compileRates(): Promise<ExchangeRate> {
  const currencies: string[] = ["PHP", "USD", "JPY", "GBP", "EUR", "CNY"];

  const ratesArray = await Promise.all(
    currencies.map((base) => fetchExchangeRates(base, currencies)),
  );

  // Merge array of objects into a single object
  const rates: ExchangeRate = {};
  for (const rateObj of ratesArray) {
    Object.assign(rates, rateObj);
  }

  return rates;
}

export function convert(
  rates: ExchangeRate,
  base: string,
  target: string,
  amount: number,
): number {
  const rate: number = rates[base][target];
  return amount * rate;
}
