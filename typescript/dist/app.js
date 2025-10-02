"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exchangeService_1 = require("./services/exchangeService");
const mainMenuController_1 = require("./controllers/mainMenuController");
async function main() {
    console.log("Running program...\n");
    let user = {
        name: null,
        balance: 0,
    };
    let rates = await (0, exchangeService_1.compileRates)();
    (0, mainMenuController_1.navigateMainMenu)(user, rates);
}
main();
