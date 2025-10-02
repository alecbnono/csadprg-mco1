"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.navigateRegister = navigateRegister;
const accountServices_1 = require("../services/accountServices");
const input_1 = require("../utils/input");
const prompts_1 = require("../utils/prompts");
async function navigateRegister(account) {
    let prompt;
    let name;
    do {
        console.log("\nRegister Account Name");
        name = await (0, input_1.input)("Account Name: ");
        prompt = await (0, prompts_1.askYesNo)();
    } while (prompt !== "Y" && prompt !== "y");
    (0, accountServices_1.setName)(account, name);
}
