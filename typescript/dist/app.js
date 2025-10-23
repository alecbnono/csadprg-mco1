/**
 * @fileoverview Entry point of the Banko Lasalyano application.
 *
 * Initializes the user account, retrieves exchange rate data, and starts
 * the main menu navigation for performing banking operations.
 *
 * @module app
 */

import { compileRates } from "./services/exchangeService.js";
import { navigateMainMenu } from "./controllers/mainMenuController.js";

/**
 * The main function initializes the app state and launches the user interface.
 *
 * This function:
 * 1. Displays a startup message.
 * 2. Creates a user object with default properties.
 * 3. Fetches current foreign exchange rates.
 * 4. Passes both the user and rates to the main menu navigation controller.
 *
 * @async
 * @function main
 * @returns {Promise<void>} Resolves once the main program flow completes.
 *
 * @example
 * // Run the main application
 * main();
 */
async function main() {
  // Display a startup message to indicate that the program has begun running.
  console.log("Running program...\n");

  // Initialize a user object with default values.
  // The user’s name will be set during registration.
  let user = {
    name: null, // Placeholder for the account holder’s name
    balance: 0, // Initial account balance
  };

  // Fetch the latest foreign exchange rates from the API.
  // These rates will be used in the currency exchange and record features.
  let rates = await compileRates();

  // Uncomment this line to inspect the fetched exchange rate data (for debugging).
  // console.log(rates);

  // Launch the main menu navigation system.
  // This function controls user interaction and feature access.
  navigateMainMenu(user, rates);
}

// Execute the main function to start the program.
main();
