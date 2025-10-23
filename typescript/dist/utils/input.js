"use strict";
import readline from "readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

/**
 * Prompts the user for input and returns their response.
 *
 * @async
 * @function userInput
 * @param {string} query - The message or question to display to the user.
 * @returns {Promise<string>} A promise resolving to the user's input as a string.
 *
 * @example
 * const name = await userInput("Enter your name: ");
 * console.log(`Hello, ${name}!`);
 */
export async function userInput(query) {
  return rl.question(query);
}
