"use strict";
/**
 * Displays and handles the main menu navigation for the Banko Lasalyano system.
 *
 * This function serves as the entry point of the CLI-based banking application.
 * It repeatedly presents a transaction menu, accepts user input, and routes
 * control flow to the corresponding feature modules:
 *
 * 1. Register Account Name
 * 2. Deposit Amount
 * 3. Withdraw Amount
 * 4. Currency Exchange
 * 5. Record Exchange Rates
 * 6. Show Interest Computation
 * 0. Exit
 *
 * The loop continues until the user selects "Exit".
 *
 * @async
 * @function navigateMainMenu
 * @param {Object} account - The user account object used by various transaction functions.
 * @param {string|null} account.name - The name of the account holder.
 * @param {number} account.balance - The account’s current balance.
 * @param {Object} rates - An object containing exchange rate data, typically structured as:
 * ```
 * {
 *   [baseCurrency]: {
 *     [targetCurrency]: number
 *   }
 * }
 * ```
 * @returns {Promise<void>} A promise that resolves when the user exits the program.
 *
 * @example
 * // Example usage:
 * const account = { name: null, balance: 0 };
 * const rates = {
 *   USD: { PHP: 58.5, EUR: 0.93 },
 *   PHP: { USD: 0.017, EUR: 0.016 }
 * };
 * await navigateMainMenu(account, rates);
 *
 * // Console output:
 * // Welcome to Banko Lasalyano
 * // Select Transaction:
 * // [1] Register Account Name
 * // [2] Deposit Amount
 * // [3] Withdraw Amount
 * // ...
 * // Input Selection: 1
 * // -> navigates to account registration
 */

import { menuPrompt } from "../utils/prompts.js";
import { navigateRegister } from "./registerController.js";
import { navigateDeposit } from "./depositController.js";
import { navigateWithdraw } from "./withdrawController.js";
import { navigateExchange } from "./exchangeController.js";
import { navigateRecord } from "./recordController.js";
import { navigateInterest } from "./interestController.js";

export async function navigateMainMenu(account, rates) {
  let input;
  do {
    console.log("Welcome to Banko Lasalyano\n");
    console.log("Select Transaction:");
    console.log("[1] Register Account Name");
    console.log("[2] Deposit Amount");
    console.log("[3] Withdraw Amount");
    console.log("[4] Currency Exchange");
    console.log("[5] Record Exchange Rates");
    console.log("[6] Show Interest Computation");
    console.log("[0] Exit");
    input = await menuPrompt("Input Selection: ", 0, 6);
    switch (input) {
      case 1:
        await navigateRegister(account);
        break;
      case 2:
        await navigateDeposit(account);
        break;
      case 3:
        await navigateWithdraw(account);
        break;
      case 4:
        await navigateExchange(rates);
        break;
      case 5:
        await navigateRecord(rates);
        break;
      case 6:
        await navigateInterest(account);
        break;
      case 0:
        console.log("Goodbye!");
        process.exit(0);
      default:
        break;
    }
  } while (input !== 0);
}
