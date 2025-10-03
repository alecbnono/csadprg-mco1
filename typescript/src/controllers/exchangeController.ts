import { ExchangeRate } from "../types/ExchangeRate";
import {
  convert,
  indexToKey,
  listCurrencies,
} from "../services/exchangeService";
import { askYesNo, moneyPrompt, menuPrompt } from "../utils/prompts";

export async function navigateExchange(rates: ExchangeRate): Promise<void> {
  let prompt: string;
  do {
    let inputIndex: number;
    let inputAmount: number;
    let outputIndex: number;
    let outputAmount: number;

    console.log("\nForeign Currency Exchange");
    console.log("Source Currency Option:");
    listCurrencies();

    inputIndex = await menuPrompt("Source Currency: ", 1, 6);

    inputAmount = await moneyPrompt("Source Amount: ");

    console.log("\nExchange Currency Option:");
    listCurrencies();

    outputIndex = await menuPrompt("Exchange Currency: ", 1, 6);

    outputAmount =
      Math.round(
        convert(
          rates,
          indexToKey(inputIndex),
          indexToKey(outputIndex),
          inputAmount,
        ) * 100,
      ) / 100;

    console.log(`Exchange Amount: ${outputAmount}`);

    prompt = await askYesNo("Convert another currency");
  } while (prompt !== "Y" && prompt !== "y");
}
