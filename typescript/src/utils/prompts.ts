import { input } from "./input";

// input validation for the menu navigation
// start & end params represent inclusive ranges
export async function menuPrompt(start: number, end: number) {
  let prompt: string;
  do {
    prompt = await input("Input Selection: ");
    if (typeof prompt !== "number" || prompt < start || prompt > end) {
      console.log("Invalid Input!");
    }
  } while (typeof prompt !== "number" || prompt < start || prompt > end);

  return prompt;
}

export async function askYesNo() {
  const validInputs: string[] = ["Y", "y", "N", "n"];
  let prompt: string;

  do {
    prompt = await input("Input Selection [Y/N]: ");
    if (!validInputs.includes(prompt)) {
      console.log("Invalid Input!");
    }
  } while (!validInputs.includes(prompt));

  return prompt;
}
