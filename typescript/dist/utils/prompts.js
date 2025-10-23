"use strict";
/**
 * @fileoverview Provides reusable prompt utilities for user input validation,
 * including menu selection, monetary input, and yes/no confirmation prompts.
 *
 * @module utils/prompts
 */

import { userInput } from "./input.js";

/**
 * Prompts the user to enter a numeric selection within a specified range.
 *
 * Continues prompting until a valid number within the inclusive range
 * [`start`, `end`] is entered.
 *
 * @async
 * @function menuPrompt
 * @param {string} promptText - The message displayed to the user.
 * @param {number} start - The lowest valid selection number (inclusive).
 * @param {number} end - The highest valid selection number (inclusive).
 * @returns {Promise<number>} A promise resolving to the validated numeric input.
 *
 * @example
 * const choice = await menuPrompt("Select option: ", 1, 5);
 * console.log(`You selected option ${choice}`);
 */
export async function menuPrompt(promptText, start, end) {
  let prompt;
  do {
    const raw = await userInput(promptText); // raw string
    prompt = Number(raw); // convert to number
    if (Number.isNaN(prompt) || prompt < start || prompt > end) {
      console.log("Invalid Input!\n");
    }
  } while (Number.isNaN(prompt) || prompt < start || prompt > end);
  return prompt;
}

/**
 * Prompts the user to enter a valid positive numeric value (for money input).
 *
 * Continues prompting until the user enters a number greater than zero.
 *
 * @async
 * @function moneyPrompt
 * @param {string} promptText - The message displayed to the user.
 * @returns {Promise<number>} A promise resolving to the validated amount entered.
 *
 * @example
 * const deposit = await moneyPrompt("Enter deposit amount: ");
 * console.log(`Depositing ₱${deposit}`);
 */
export async function moneyPrompt(promptText) {
  let prompt;
  do {
    const raw = await userInput(promptText);
    prompt = Number(raw);
    if (Number.isNaN(prompt) || prompt <= 0) {
      console.log("Invalid Input!\n");
    }
  } while (Number.isNaN(prompt) || prompt <= 0);
  return prompt;
}

/**
 * Prompts the user for a yes/no confirmation.
 *
 * Accepts uppercase or lowercase "Y" and "N" as valid inputs.
 * Continues prompting until the user enters one of the valid values.
 *
 * @async
 * @function askYesNo
 * @param {string} promptText - The question or message displayed to the user.
 * @returns {Promise<string>} A promise resolving to the user's response ("Y", "y", "N", or "n").
 *
 * @example
 * const confirm = await askYesNo("Would you like to continue?");
 * if (confirm.toLowerCase() === "y") console.log("Continuing...");
 */
export async function askYesNo(promptText) {
  const validInputs = ["Y", "y", "N", "n"];
  let prompt;
  do {
    prompt = await userInput(`\n${promptText} [Y/N]: `);
    if (!validInputs.includes(prompt)) {
      console.log("Invalid Input!\n");
    }
  } while (!validInputs.includes(prompt));
  return prompt;
}
