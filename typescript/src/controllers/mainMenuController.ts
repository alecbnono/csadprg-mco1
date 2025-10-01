import { menuPrompt } from "../utils/prompts";
import { navigateRegister } from "./registerController.ts";

export async function navigateMainMenu(account: Account, rates: ExchangeRate) {
  console.log("Select Transaction:");
  console.log("[1] Register Account Name");
  console.log("[2] Deposit Amount");
  console.log("[3] Withdraw Amount");
  console.log("[4] Currency Exchange");
  console.log("[5] Record Exchange Rates");
  console.log("[6] Show Interest Computation");

  const input = await menuPrompt(1, 6);

  switch (input) {
    case 1:
      navigateRegister(account);
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
    case 6:
      break;
    default:
      break;
  }
}
