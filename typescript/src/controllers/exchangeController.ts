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

    console.log("Source Currency Option:");
    listCurrencies();

    outputIndex = await menuPrompt("Exchange Currency: ", 1, 6);

    outputAmount = convert(
      rates,
      indexToKey(inputIndex),
      indexToKey(outputIndex),
      inputAmount,
    );

    console.log(`Exchange Amount: ${outputAmount}`);

    prompt = await askYesNo("Convert another Currency");
  } while (prompt !== "Y" && prompt !== "y");
}
