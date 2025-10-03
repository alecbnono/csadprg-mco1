import { ExchangeRate } from "../types/ExchangeRate";
import { indexToKey, listCurrencies } from "../services/exchangeService";
import { askYesNo, moneyPrompt, menuPrompt } from "../utils/prompts";

export async function navigateRecord(rates: ExchangeRate): Promise<void> {
  let prompt: string;
  do {
    console.log("\nRecord Exchange Rate");
    console.log("(rates from API by default)\n");

    listCurrencies();

    let newRate: number;
    let menuInput: number;

    menuInput = await menuPrompt("Select Foreign Currency: ", 1, 6);

    newRate = await moneyPrompt("Set Exchange Rate: ");

    rates["PHP"][indexToKey(menuInput)] = 1 / newRate;

    prompt = await askYesNo("Back to the Main Menu");
  } while (prompt !== "Y" && prompt !== "y");
}
