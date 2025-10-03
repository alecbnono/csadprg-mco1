"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuPrompt = menuPrompt;
exports.moneyPrompt = moneyPrompt;
exports.askYesNo = askYesNo;
const input_1 = require("./input");
// input validation for the menu navigation
// start & end params represent inclusive ranges
async function menuPrompt(promptText, start, end) {
    let prompt;
    do {
        const raw = await (0, input_1.input)(promptText); // raw string
        prompt = Number(raw); // convert to number
        if (Number.isNaN(prompt) || prompt < start || prompt > end) {
            console.log("Invalid Input!\n");
        }
    } while (Number.isNaN(prompt) || prompt < start || prompt > end);
    return prompt;
}
async function moneyPrompt(promptText) {
    let prompt;
    do {
        const raw = await (0, input_1.input)(promptText); // raw string
        prompt = Number(raw); // convert to number
        if (Number.isNaN(prompt) || prompt <= 0) {
            console.log("Invalid Input!\n");
        }
    } while (Number.isNaN(prompt) || prompt <= 0);
    return prompt;
}
async function askYesNo(promptText) {
    const validInputs = ["Y", "y", "N", "n"];
    let prompt;
    do {
        prompt = await (0, input_1.input)(`\n${promptText} [Y/N]: `);
        if (!validInputs.includes(prompt)) {
            console.log("Invalid Input!\n");
        }
    } while (!validInputs.includes(prompt));
    return prompt;
}
