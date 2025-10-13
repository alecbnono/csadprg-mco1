import {
  convert,
  indexToKey,
  listCurrencies,
} from "../services/exchangeService.js";
import { askYesNo, moneyPrompt, menuPrompt } from "../utils/prompts.js";
export async function navigateExchange(rates) {
  let prompt;
  do {
    let inputIndex;
    let inputAmount;
    let outputIndex;
    let outputAmount;
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
