"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.navigateWithdraw = navigateWithdraw;
const accountServices_1 = require("../services/accountServices");
const prompts_1 = require("../utils/prompts");
async function navigateWithdraw(account) {
    if (account.name !== null) {
        let prompt;
        do {
            console.log("\nWithdraw Amount");
            console.log(`Account Name: ${account.name}`);
            console.log(`Current Balance: ${account.balance}`);
            console.log(`Currency: PHP\n`);
            let valid = false;
            let money;
            do {
                // checks if number
                money = await (0, prompts_1.moneyPrompt)("Withdraw Amount: ");
                // checks if number is > 0 or balance is <= 0
                valid = (0, accountServices_1.withdraw)(account, money);
                if (valid === false) {
                    console.log("Not enough balance!\n");
                }
            } while (valid === false);
            console.log(`Updated Balance: ${account.balance}`);
            prompt = await (0, prompts_1.askYesNo)();
        } while (prompt !== "Y" && prompt !== "y");
    }
    else {
        console.log("Please Register First!\n");
    }
}
