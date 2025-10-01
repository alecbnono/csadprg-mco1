import { ExchangeRate } from "../types/ExchangeRate";

export async function fetchExchangeRates(
  base: string,
  targets: string[],
): Promise<ExchangeRate> {
  const res = await fetch(`https://open.er-api.com/v6/latest/${base}`);
  const data = await res.json();

  const result: ExchangeRate = {
    [base]: {},
  };

  for (const target of targets) {
    if (data.rates[target] !== undefined) {
      result[base][target] = data.rates[target];
    }
  }

  return result;
}
