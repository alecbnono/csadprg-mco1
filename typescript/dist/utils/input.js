"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = input;
// @ts-ignore
const promises_1 = __importDefault(require("readline/promises"));
// @ts-ignore
const node_process_1 = require("node:process");
const rl = promises_1.default.createInterface({ input: node_process_1.stdin, output: node_process_1.stdout });
async function input(query) {
    return rl.question(query);
}
