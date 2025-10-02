"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.navigateMainMenu = navigateMainMenu;
const prompts_1 = require("../utils/prompts");
const registerController_1 = require("./registerController");
const depositController_1 = require("./depositController");
const withdrawController_1 = require("./withdrawController");
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
        input = await (0, prompts_1.menuPrompt)(0, 6);
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
                break;
            case 5:
                break;
            case 6:
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
