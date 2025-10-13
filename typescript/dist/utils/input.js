// @ts-ignore
import readline from "readline/promises";
// @ts-ignore
import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({ input, output });
export async function userInput(query) {
  return rl.question(query);
}
