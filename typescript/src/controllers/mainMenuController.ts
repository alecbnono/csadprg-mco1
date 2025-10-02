import { menuPrompt } from "../utils/prompts";
import { navigateRegister } from "./registerController";
import { navigateDeposit } from "./depositController";
import { navigateWithdraw } from "./withdrawController";
import { Account } from "../types/Account";
import { ExchangeRate } from "../types/ExchangeRate";

export async function navigateMainMenu(account: Account, rates: ExchangeRate) {
  let input: number;

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

    input = await menuPrompt(0, 6);

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
        break;
      case 5:
        break;
      case 6:
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
