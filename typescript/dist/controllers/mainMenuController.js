"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.navigateMainMenu = navigateMainMenu;
const prompts_1 = require("../utils/prompts");
const registerController_1 = require("./registerController");
const depositController_1 = require("./depositController");
const withdrawController_1 = require("./withdrawController");
const exchangeController_1 = require("./exchangeController");
const recordController_1 = require("./recordController");
const interestController_1 = require("./interestController");
async function navigateMainMenu(account, rates) {
    let input;
    do {
        console.log("Welcome to Banko Lasalyano\n");
        console.log("Select Transaction:");
        console.log("[1] Register Account Name");
        console.log("[2] Deposit Amount");
        console.log("[3] Withdraw Amount");
        console.log("[4] Currency Exchange");
        console.log("[5] Record Exchange Rates");
        console.log("[6] Show Interest Computation");
        console.log("[0] Exit");
        input = await (0, prompts_1.menuPrompt)("Input Selection: ", 0, 6);
        switch (input) {
            case 1:
                await (0, registerController_1.navigateRegister)(account);
                break;
            case 2:
                await (0, depositController_1.navigateDeposit)(account);
                break;
            case 3:
                await (0, withdrawController_1.navigateWithdraw)(account);
                break;
            case 4:
                await (0, exchangeController_1.navigateExchange)(rates);
                break;
            case 5:
                await (0, recordController_1.navigateRecord)(rates);
                break;
            case 6:
                await (0, interestController_1.navigateInterest)(account);
                break;
            case 0:
                console.log("Goodbye!");
                // @ts-ignore
                process.exit(0);
            default:
                break;
        }
    } while (input !== 0);
}
