// @ts-ignore
import readline from "readline/promises";

// @ts-ignore
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

export async function input(query: string): Promise<string> {
  return rl.question(query);
}
