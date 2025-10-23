"use strict";

import { setName } from "../services/accountServices.js";
import { userInput } from "../utils/input.js";
import { askYesNo } from "../utils/prompts.js";

/**
 * Handles the registration flow for setting a user's account name.
 *
 * Continuously prompts the user to enter an account name until they
 * choose to return to the main menu. Once the user confirms, the name
 * is saved to the provided account object.
 *
 * @async
 * @function navigateRegister
 * @param {Object} account - The account object where the name will be set.
 * @returns {Promise<void>} Resolves once the user finishes the registration process.
 */

export async function navigateRegister(account) {
  let prompt;
  let name;
  do {
    console.log("\nRegister Account Name");
    name = await userInput("Account Name: ");
    prompt = await askYesNo("Back to the Main Menu");
  } while (prompt !== "Y" && prompt !== "y");
  setName(account, name);
}
