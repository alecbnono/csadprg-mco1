import { ExchangeRate } from "../types/ExchangeRate";
import { fetchExchangeRates } from "../apis/forexApi";

export async function compileRates(): Promise<ExchangeRate> {
  const currencies: string[] = ["PHP", "USD", "JPY", "GBP", "EUR", "CNY"];

  return await fetchExchangeRates("PHP", currencies);
}

export function listCurrencies(): void {
  console.log("[1] Philippine Peso (PHP)");
  console.log("[2] United States Dollar (USD)");
  console.log("[3] Japanese Yen (JPY)");
  console.log("[4] British Pound Sterling (GBP)");
  console.log("[5] Euro (EUR)");
  console.log("[6] Chinese Yuan Renminni (CNY)");
}

export function indexToKey(index: number): string {
  switch (index) {
    case 1:
      return "PHP";
    case 2:
      return "USD";
    case 3:
      return "JPY";
    case 4:
      return "GBP";
    case 5:
      return "EUR";
    case 6:
      return "CNY";
    default:
      throw new Error(`Invalid index ${index} for currency mapping`);
  }
}

export function convert(
  rates: ExchangeRate,
  base: string,
  target: string,
  amount: number,
): number {
  // input currency -> PHP -> output currency
  const convertToPHP: number = 1 / rates["PHP"][base];
  const convertFromPHP: number = rates["PHP"][target];

  return amount * convertFromPHP;
}
