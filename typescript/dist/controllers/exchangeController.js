/**
 * Handles the user interaction flow for performing foreign currency exchange operations.
 *
 * This function presents a console-based interface where users can:
 * 1. Select a source currency and input an amount.
 * 2. Select a target (exchange) currency.
 * 3. View the converted amount based on current exchange rates.
 * The process can repeat until the user opts to stop.
 *
 * @async
 * @function navigateExchange
 * @param {Object} rates - An object containing exchange rates, typically structured as:
 * ```
 * {
 *   [baseCurrency]: {
 *     [targetCurrency]: number
 *   }
 * }
 * ```
 * @returns {Promise<void>} A promise that resolves when the user exits the exchange process.
 *
 * @example
 * // Example usage:
 * const rates = {
 *   USD: { EUR: 0.93, JPY: 156.7, PHP: 58.5 },
 *   EUR: { USD: 1.07, JPY: 168.3, PHP: 63.2 },
 * };
 * await navigateExchange(rates);
 * // Console flow:
 * // Foreign Currency Exchange
 * // Source Currency Option:
 * // 1. USD
 * // 2. EUR
 * // ...
 * // Source Currency: 1
 * // Source Amount: 100
 * // Exchange Currency Option:
 * // 1. USD
 * // 2. EUR
 * // ...
 * // Exchange Currency: 2
 * // Exchange Amount: 93
 */

"use strict";

import {
  convert,
  indexToKey,
  listCurrencies,
} from "../services/exchangeService.js";
import { askYesNo, moneyPrompt, menuPrompt } from "../utils/prompts.js";

export async function navigateExchange(rates) {
  let prompt;
  do {
    let inputIndex;
    let inputAmount;
    let outputIndex;
    let outputAmount;
    console.log("\nForeign Currency Exchange");
    console.log("Source Currency Option:");
    listCurrencies();
    inputIndex = await menuPrompt("Source Currency: ", 1, 6);
    inputAmount = await moneyPrompt("Source Amount: ");
    console.log("\nExchange Currency Option:");
    listCurrencies();
    outputIndex = await menuPrompt("Exchange Currency: ", 1, 6);
    outputAmount =
      Math.round(
        convert(
          rates,
          indexToKey(inputIndex),
          indexToKey(outputIndex),
          inputAmount,
        ) * 100,
      ) / 100;
    console.log(`Exchange Amount: ${outputAmount}`);
    prompt = await askYesNo("Convert another currency");
  } while (prompt == "Y" && prompt == "y");
}
