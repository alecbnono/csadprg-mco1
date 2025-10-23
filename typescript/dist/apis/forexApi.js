/**
 * Fetches the latest exchange rates for a given base currency against one or more target currencies.
 *
 * This function queries the [Open Exchange Rates API](https://open.er-api.com/v6/latest/)
 * and returns an object mapping the base currency to its corresponding exchange rates
 * for the specified targets.
 *
 * @async
 * @function fetchExchangeRates
 * @param {string} base - The base currency code (e.g., `"USD"`, `"EUR"`).
 * @param {string[]} targets - An array of target currency codes to fetch rates for.
 * @returns {Promise<Object>} A promise that resolves to an object in the format:
 * ```
 * {
 *   [base]: {
 *     [target]: number
 *   }
 * }
 * ```
 * where each `[target]` is the exchange rate relative to the base currency.
 *
 * @example
 * // Fetch USD to EUR and JPY rates
 * const rates = await fetchExchangeRates("USD", ["EUR", "JPY"]);
 * console.log(rates);
 * // Output: { USD: { EUR: 0.93, JPY: 156.7 } }
 */

"use strict";

export async function fetchExchangeRates(base, targets) {
  const res = await fetch(`https://open.er-api.com/v6/latest/${base}`);
  const data = await res.json();
  const result = {
    [base]: {},
  };
  for (const target of targets) {
    if (data.rates[target] !== undefined) {
      result[base][target] = data.rates[target];
    }
  }
  return result;
}
