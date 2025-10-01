"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchExchangeRates = fetchExchangeRates;
async function fetchExchangeRates(base, targets) {
    const res = await fetch(`https://open.er-api.com/v6/latest/${base}`);
    const data = await res.json();
    const result = {
        [base]: {},
    };
    for (const target of targets) {
        if (data.rates[target] !== undefined) {
            result[base][target] = data.rates[target];
        }
    }
    return result;
}
