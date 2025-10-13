import { fetchExchangeRates } from "../apis/forexApi.js";
export async function compileRates() {
  const currencies = ["PHP", "USD", "JPY", "GBP", "EUR", "CNY"];
  return await fetchExchangeRates("PHP", currencies);
}
export function listCurrencies() {
  console.log("[1] Philippine Peso (PHP)");
  console.log("[2] United States Dollar (USD)");
  console.log("[3] Japanese Yen (JPY)");
  console.log("[4] British Pound Sterling (GBP)");
  console.log("[5] Euro (EUR)");
  console.log("[6] Chinese Yuan Renminni (CNY)");
}
export function indexToKey(index) {
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
export function convert(rates, base, target, amount) {
  // input currency -> PHP -> output currency
  const convertToPHP = 1 / rates["PHP"][base];
  const convertFromPHP = convertToPHP * rates["PHP"][target];
  return amount * convertFromPHP;
}
