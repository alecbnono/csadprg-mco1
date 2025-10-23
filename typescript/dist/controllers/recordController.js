"use strict";

import { indexToKey, listCurrencies } from "../services/exchangeService.js";
import { askYesNo, moneyPrompt, menuPrompt } from "../utils/prompts.js";

/**
 * Handles the user interaction flow for recording or updating foreign exchange rates.
 *
 * This function allows the user to manually override exchange rates
 * (which are initially fetched from an API). It displays the list of
 * available currencies, prompts the user to select one, and then asks
 * for a new exchange rate relative to the Philippine Peso (PHP).
 *
 * The updated rate is stored directly in the provided `rates` object by
 * setting `rates["PHP"][<currency>] = 1 / newRate`.
 * The loop continues until the user confirms returning to the main menu.
 *
 * @async
 * @function navigateRecord
 * @param {Object} rates - The object containing currency exchange rate mappings.
 * Expected structure:
 * ```
 * {
 *   PHP: {
 *     USD: number,
 *     EUR: number,
 *     ...
 *   },
 *   USD: {
 *     PHP: number,
 *     ...
 *   },
 *   ...
 * }
 * ```
 * @returns {Promise<void>} A promise that resolves when the user exits the record menu.
 *
 * @example
 * // Example usage:
 * const rates = {
 *   PHP: { USD: 0.017, EUR: 0.016 },
 *   USD: { PHP: 58.5, EUR: 0.93 },
 * };
 * await navigateRecord(rates);
 * // Console output:
 * // Record Exchange Rate
 * // (rates from API by default)
 * // 1. USD
 * // 2. EUR
 * // ...
 * // Select Foreign Currency: 1
 * // Set Exchange Rate: 60
 * // -> rates.PHP.USD is updated to 1/60 = 0.0167
 */

export async function navigateRecord(rates) {
  let prompt;
  do {
    console.log("\nRecord Exchange Rate");
    console.log("(rates from API by default)\n");
    listCurrencies();
    let newRate;
    let menuInput;
    menuInput = await menuPrompt("Select Foreign Currency: ", 1, 6);
    newRate = await moneyPrompt("Set Exchange Rate: ");
    rates["PHP"][indexToKey(menuInput)] = 1 / newRate;
    prompt = await askYesNo("Back to the Main Menu");
  } while (prompt !== "Y" && prompt !== "y");
}
