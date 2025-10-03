"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileRates = compileRates;
exports.listCurrencies = listCurrencies;
exports.indexToKey = indexToKey;
exports.convert = convert;
const forexApi_1 = require("../apis/forexApi");
async function compileRates() {
    const currencies = ["PHP", "USD", "JPY", "GBP", "EUR", "CNY"];
    return await (0, forexApi_1.fetchExchangeRates)("PHP", currencies);
}
function listCurrencies() {
    console.log("[1] Philippine Peso (PHP)");
    console.log("[2] United States Dollar (USD)");
    console.log("[3] Japanese Yen (JPY)");
    console.log("[4] British Pound Sterling (GBP)");
    console.log("[5] Euro (EUR)");
    console.log("[6] Chinese Yuan Renminni (CNY)");
}
function indexToKey(index) {
    switch (index) {
        case 1:
            return "PHP";
        case 2:
            return "USD";
        case 3:
            return "JPY";
        case 4:
            return "GBP";
        case 5:
            return "EUR";
        case 6:
            return "CNY";
        default:
            throw new Error(`Invalid index ${index} for currency mapping`);
    }
}
function convert(rates, base, target, amount) {
    // input currency -> PHP -> output currency
    const convertToPHP = 1 / rates["PHP"][base];
    const convertFromPHP = rates["PHP"][target];
    return amount * convertFromPHP;
}
