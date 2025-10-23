"use strict";
/**
 * @fileoverview Provides functions for handling foreign exchange operations,
 * including fetching exchange rates, listing currencies, converting between
 * currencies, and mapping menu selections to currency codes.
 *
 * @module services/exchangeService
 */

import { fetchExchangeRates } from "../apis/forexApi.js";

/**
 * Fetches the latest exchange rates relative to the Philippine Peso (PHP).
 *
 * @async
 * @function compileRates
 * @returns {Promise<Object>} A promise resolving to an object containing
 * exchange rates for supported currencies relative to PHP.
 *
 * @example
 * const rates = await compileRates();
 * console.log(rates["PHP"]["USD"]); // e.g., 0.018
 */
export async function compileRates() {
  const currencies = ["PHP", "USD", "JPY", "GBP", "EUR", "CNY"];
  return await fetchExchangeRates("PHP", currencies);
}

/**
 * Displays the list of supported currencies in the console.
 *
 * @function listCurrencies
 * @returns {void}
 *
 * @example
 * listCurrencies();
 * // Outputs numbered list of currencies to the console.
 */
export function listCurrencies() {
  console.log("[1] Philippine Peso (PHP)");
  console.log("[2] United States Dollar (USD)");
  console.log("[3] Japanese Yen (JPY)");
  console.log("[4] British Pound Sterling (GBP)");
  console.log("[5] Euro (EUR)");
  console.log("[6] Chinese Yuan Renminbi (CNY)");
}

/**
 * Maps a menu index (1–6) to its corresponding currency code.
 *
 * @function indexToKey
 * @param {number} index - The numeric index selected by the user (1–6).
 * @returns {string} The corresponding ISO 4217 currency code (e.g., "USD").
 * @throws {Error} If the provided index does not match a valid currency.
 *
 * @example
 * const code = indexToKey(2); // "USD"
 */
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

/**
 * Converts an amount from one currency to another using exchange rates.
 *
 * The conversion first converts the input currency to PHP, then from PHP to
 * the target currency.
 *
 * @function convert
 * @param {Object} rates - The exchange rate object containing conversion data.
 * @param {string} base - The currency code of the source currency (e.g., "USD").
 * @param {string} target - The currency code of the destination currency (e.g., "JPY").
 * @param {number} amount - The amount of money to convert.
 * @returns {number} The converted amount in the target currency.
 *
 * @example
 * const converted = convert(rates, "USD", "JPY", 100);
 * console.log(converted); // e.g., 14752.31
 */
export function convert(rates, base, target, amount) {
  // Convert: base → PHP → target
  const convertToPHP = 1 / rates["PHP"][base];
  const convertFromPHP = convertToPHP * rates["PHP"][target];
  return amount * convertFromPHP;
}
