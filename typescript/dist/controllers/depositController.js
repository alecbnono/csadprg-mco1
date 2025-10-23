/**
 * Handles the deposit navigation flow for a given account.
 *
 * This function interacts with the user via the console to perform
 * deposit transactions. It repeatedly prompts the user to input
 * a valid deposit amount and updates the account balance accordingly.
 * The process continues until the user confirms returning to the main menu.
 *
 * @async
 * @function navigateDeposit
 * @param {Object} account - The account object associated with the user.
 * @param {string|null} account.name - The name of the account holder. If `null`, the user is asked to register first.
 * @param {number} account.balance - The current balance of the account.
 * @returns {Promise<void>} A promise that resolves once the deposit process is complete.
 *
 * @example
 * // Example usage:
 * const account = { name: "Alec", balance: 1000 };
 * await navigateDeposit(account);
 * // Console output:
 * // Deposit Amount
 * // Account Name: Alec
 * // Current Balance: 1000
 * // Currency: PHP
 * // Deposit Amount: 500
 * // Updated Balance: 1500
 */

"use strict";

import { deposit } from "../services/accountServices.js";
import { askYesNo, moneyPrompt } from "../utils/prompts.js";

export async function navigateDeposit(account) {
  if (account.name !== null) {
    let prompt;
    do {
      console.log("\nDeposit Amount");
      console.log(`Account Name: ${account.name}`);
      console.log(`Current Balance: ${account.balance}`);
      console.log(`Currency: PHP\n`);
      let valid = false;
      let money;
      do {
        // checks if number
        money = await moneyPrompt("Deposit Amount: ");
        // checks if number is > 0
        valid = deposit(account, money);
        if (valid === false) {
          console.log("Invalid Input\n");
        }
      } while (valid === false);
      console.log(`Updated Balance: ${account.balance}`);
      prompt = await askYesNo("Back to the Main Menu");
    } while (prompt !== "Y" && prompt !== "y");
  } else {
    console.log("Please Register First!\n");
  }
}
