/**
 * Handles the user interaction flow for viewing accrued interest over time.
 *
 * This function displays an interest table for a given account balance
 * based on a fixed 5% interest rate. It prompts the user for the total number
 * of days to compute interest for and displays a per-day breakdown including:
 * the day count, interest earned, and updated balance.
 * The process repeats until the user opts to return to the main menu.
 *
 * @async
 * @function navigateInterest
 * @param {Object} account - The account object associated with the user.
 * @param {string|null} account.name - The name of the account holder. If `null`, the user is asked to register first.
 * @param {number} account.balance - The current balance of the account, used as the principal for interest computation.
 * @returns {Promise<void>} A promise that resolves when the user exits the interest view menu.
 *
 * @example
 * // Example usage:
 * const account = { name: "Alec", balance: 10000 };
 * await navigateInterest(account);
 * // Console output:
 * // Show Interest Amount
 * // Account Name: Alec
 * // Current Balance: 10000
 * // Currency: PHP
 * // Interest Rate: 5%
 * // Total Number of Days: 3
 * // Day | Interest | Balance
 * // 1   | 500.00   | 10500.00
 * // 2   | 525.00   | 11025.00
 * // 3   | 551.25   | 11576.25
 */
"use strict";

import { computeInterest } from "../services/accountServices.js";
import { askYesNo, moneyPrompt } from "../utils/prompts.js";

export async function navigateInterest(account) {
  if (account.name !== null) {
    let prompt;
    do {
      console.log("\nShow Interest Amount");
      console.log(`Account Name: ${account.name}`);
      console.log(`Current Balance: ${account.balance}`);
      console.log(`Currency: PHP\n`);
      console.log(`Interest Rate: 5%\n`);
      let days;
      let currentPrincipal = account.balance;
      days = await moneyPrompt("Total Number of Days: ");
      console.log("Day | Interest | Balance");
      for (let i = 0; i < days; i++) {
        let day = (i + 1).toString().padEnd(4);
        let interestGained = computeInterest(currentPrincipal);
        let nextBalance =
          Math.round((currentPrincipal + interestGained) * 100) / 100;
        console.log(
          `${(i + 1).toString().padEnd(3)} | ${interestGained.toString().padEnd(8)} | ${nextBalance}`,
        );
        currentPrincipal = nextBalance;
      }
      prompt = await askYesNo("Back to the Main Menu");
    } while (prompt !== "Y" && prompt !== "y");
  } else {
    console.log("Please Register First!\n");
  }
}
