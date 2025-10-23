"use strict";

import { withdraw } from "../services/accountServices.js";
import { askYesNo, moneyPrompt } from "../utils/prompts.js";

/**
 * Handles the withdrawal process for an account.
 *
 * If the account is registered, the user is prompted to enter a withdrawal amount.
 * The function ensures that the entered amount is valid and that the account
 * has sufficient balance. The user can repeatedly withdraw until they choose
 * to return to the main menu.
 *
 * @async
 * @function navigateWithdraw
 * @param {Object} account - The account object containing the user's name and balance.
 * @param {string} account.name - The name associated with the account.
 * @param {number} account.balance - The current balance of the account.
 * @returns {Promise<void>} Resolves once the withdrawal process completes or
 * the user decides to return to the main menu.
 */

export async function navigateWithdraw(account) {
  if (account.name !== null) {
    let prompt;
    do {
      console.log("\nWithdraw Amount");
      console.log(`Account Name: ${account.name}`);
      console.log(`Current Balance: ${account.balance}`);
      console.log(`Currency: PHP\n`);
      let valid = false;
      let money;
      do {
        // checks if number
        money = await moneyPrompt("Withdraw Amount: ");
        // checks if number is > 0 or balance is <= 0
        valid = withdraw(account, money);
        if (valid === false) {
          console.log("Not enough balance!\n");
        }
      } while (valid === false);
      console.log(`Updated Balance: ${account.balance}`);
      prompt = await askYesNo("Back to the Main Menu");
    } while (prompt !== "Y" && prompt !== "y");
  } else {
    console.log("Please Register First!\n");
  }
}
