"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuPrompt = menuPrompt;
exports.askYesNo = askYesNo;
const input_1 = require("./input");
// input validation for the menu navigation
// start & end params represent inclusive ranges
async function menuPrompt(start, end) {
    let prompt;
    do {
        prompt = await (0, input_1.input)("Input Selection: ");
        if (typeof prompt !== "number" || prompt < start || prompt > end) {
            console.log("Invalid Input!");
        }
    } while (typeof prompt !== "number" || prompt < start || prompt > end);
    return prompt;
}
async function askYesNo() {
    const validInputs = ["Y", "y", "N", "n"];
    let prompt;
    do {
        prompt = await (0, input_1.input)("Input Selection [Y/N]: ");
        if (!validInputs.includes(prompt)) {
            console.log("Invalid Input!");
        }
    } while (!validInputs.includes(prompt));
    return prompt;
}
