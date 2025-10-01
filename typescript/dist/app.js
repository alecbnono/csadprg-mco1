"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exchangeService_1 = require("./services/exchangeService");
async function main() {
    console.log("Running program...");
    console.log(await (0, exchangeService_1.compileRates)());
}
main();
