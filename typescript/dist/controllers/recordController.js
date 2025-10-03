"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.navigateRecord = navigateRecord;
const exchangeService_1 = require("../services/exchangeService");
const prompts_1 = require("../utils/prompts");
async function navigateRecord(rates) {
    let prompt;
    do {
        console.log("\nRecord Exchange Rate");
        console.log("(rates from API by default)\n");
        (0, exchangeService_1.listCurrencies)();
        let newRate;
        let menuInput;
        menuInput = await (0, prompts_1.menuPrompt)("Select Foreign Currency: ", 1, 6);
        newRate = await (0, prompts_1.moneyPrompt)("Set Exchange Rate: ");
        rates["PHP"][(0, exchangeService_1.indexToKey)(menuInput)] = 1 / newRate;
        prompt = await (0, prompts_1.askYesNo)("Back to the Main Menu");
    } while (prompt !== "Y" && prompt !== "y");
}
