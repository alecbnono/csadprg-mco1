import { indexToKey, listCurrencies } from "../services/exchangeService.js";
import { askYesNo, moneyPrompt, menuPrompt } from "../utils/prompts.js";
export async function navigateRecord(rates) {
  let prompt;
  do {
    console.log("\nRecord Exchange Rate");
    console.log("(rates from API by default)\n");
    listCurrencies();
    let newRate;
    let menuInput;
    menuInput = await menuPrompt("Select Foreign Currency: ", 1, 6);
    newRate = await moneyPrompt("Set Exchange Rate: ");
    rates["PHP"][indexToKey(menuInput)] = 1 / newRate;
    prompt = await askYesNo("Back to the Main Menu");
  } while (prompt !== "Y" && prompt !== "y");
}
