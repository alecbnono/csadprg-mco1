"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileRates = compileRates;
exports.convert = convert;
const forexApi_1 = require("../apis/forexApi");
async function compileRates() {
    const currencies = ["PHP", "USD", "JPY", "GBP", "EUR", "CNY"];
    const ratesArray = await Promise.all(currencies.map((base) => (0, forexApi_1.fetchExchangeRates)(base, currencies)));
    // Merge array of objects into a single object
    const rates = {};
    for (const rateObj of ratesArray) {
        Object.assign(rates, rateObj);
    }
    return rates;
}
function convert(rates, base, target, amount) {
    const rate = rates[base][target];
    return amount * rate;
}
