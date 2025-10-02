import { input } from "./input";

// input validation for the menu navigation
// start & end params represent inclusive ranges
export async function menuPrompt(start: number, end: number) {
  let prompt: number;
  do {
    const raw = await input("Input Selection: "); // raw string
    prompt = Number(raw); // convert to number

    if (Number.isNaN(prompt) || prompt < start || prompt > end) {
      console.log("Invalid Input!\n");
    }
  } while (Number.isNaN(prompt) || prompt < start || prompt > end);

  return prompt;
}

export async function moneyPrompt(promptText: string) {
  let prompt: number;
  do {
    const raw = await input(promptText); // raw string
    prompt = Number(raw); // convert to number

    if (Number.isNaN(prompt) || prompt <= 0) {
      console.log("Invalid Input!\n");
    }
  } while (Number.isNaN(prompt) || prompt <= 0);

  return prompt;
}

export async function askYesNo() {
  const validInputs: string[] = ["Y", "y", "N", "n"];
  let prompt: string;

  do {
    prompt = await input("\nBack to Main Menu? [Y/N]: ");
    if (!validInputs.includes(prompt)) {
      console.log("Invalid Input!\n");
    }
  } while (!validInputs.includes(prompt));

  return prompt;
}
