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
        // @ts-ignore
        process.exit(0);
      default:
        break;
    }
  } while (input !== 0);
}
