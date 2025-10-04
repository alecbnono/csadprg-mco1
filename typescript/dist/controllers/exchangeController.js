"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.navigateExchange = navigateExchange;
const exchangeService_1 = require("../services/exchangeService");
const prompts_1 = require("../utils/prompts");
async function navigateExchange(rates) {
    let prompt;
    do {
        let inputIndex;
        let inputAmount;
        let outputIndex;
        let outputAmount;
        console.log("\nForeign Currency Exchange");
        console.log("Source Currency Option:");
        (0, exchangeService_1.listCurrencies)();
        inputIndex = await (0, prompts_1.menuPrompt)("Source Currency: ", 1, 6);
        inputAmount = await (0, prompts_1.moneyPrompt)("Source Amount: ");
        console.log("\nExchange Currency Option:");
        (0, exchangeService_1.listCurrencies)();
        outputIndex = await (0, prompts_1.menuPrompt)("Exchange Currency: ", 1, 6);
        outputAmount =
            Math.round((0, exchangeService_1.convert)(rates, (0, exchangeService_1.indexToKey)(inputIndex), (0, exchangeService_1.indexToKey)(outputIndex), inputAmount) * 100) / 100;
        console.log(`Exchange Amount: ${outputAmount}`);
        prompt = await (0, prompts_1.askYesNo)("Convert another currency");
    } while (prompt !== "Y" && prompt !== "y");
}
