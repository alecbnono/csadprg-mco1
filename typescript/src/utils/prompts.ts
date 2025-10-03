import { input } from "./input";

// input validation for the menu navigation
// start & end params represent inclusive ranges
export async function menuPrompt(
  promptText: string,
  start: number,
  end: number,
): Promise<number> {
  let prompt: number;
  do {
    const raw = await input(promptText); // raw string
    prompt = Number(raw); // convert to number

    if (Number.isNaN(prompt) || prompt < start || prompt > end) {
      console.log("Invalid Input!\n");
    }
  } while (Number.isNaN(prompt) || prompt < start || prompt > end);

  return prompt;
}

export async function moneyPrompt(promptText: string): Promise<number> {
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

export async function askYesNo(promptText: string): Promise<string> {
  const validInputs: string[] = ["Y", "y", "N", "n"];
  let prompt: string;

  do {
    prompt = await input(`\n${promptText} [Y/N]: `);
    if (!validInputs.includes(prompt)) {
      console.log("Invalid Input!\n");
    }
  } while (!validInputs.includes(prompt));

  return prompt;
}
