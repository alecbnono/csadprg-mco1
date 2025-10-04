"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.navigateInterest = navigateInterest;
const accountServices_1 = require("../services/accountServices");
const prompts_1 = require("../utils/prompts");
async function navigateInterest(account) {
    if (account.name !== null) {
        let prompt;
        do {
            console.log("\nShow Interest Amount");
            console.log(`Account Name: ${account.name}`);
            console.log(`Current Balance: ${account.balance}`);
            console.log(`Currency: PHP\n`);
            console.log(`Interest Rate: 5%\n`);
            let days;
            let currentPrincipal = account.balance;
            days = await (0, prompts_1.moneyPrompt)("Total Number of Days: ");
            console.log("Day | Interest | Balance");
            for (let i = 0; i < days; i++) {
                let day = (i + 1).toString().padEnd(4);
                let interestGained = (0, accountServices_1.computeInterest)(currentPrincipal);
                let nextBalance = Math.round((currentPrincipal + interestGained) * 100) / 100;
                console.log(`${(i + 1).toString().padEnd(3)} | ${interestGained.toString().padEnd(8)} | ${nextBalance}`);
                currentPrincipal = nextBalance;
            }
            prompt = await (0, prompts_1.askYesNo)("Back to the Main Menu");
        } while (prompt !== "Y" && prompt !== "y");
    }
    else {
        console.log("Please Register First!\n");
    }
}
