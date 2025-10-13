import { userInput } from "./input.js";
// input validation for the menu navigation
// start & end params represent inclusive ranges
export async function menuPrompt(promptText, start, end) {
  let prompt;
  do {
    const raw = await userInput(promptText); // raw string
    prompt = Number(raw); // convert to number
    if (Number.isNaN(prompt) || prompt < start || prompt > end) {
      console.log("Invalid Input!\n");
    }
  } while (Number.isNaN(prompt) || prompt < start || prompt > end);
  return prompt;
}
export async function moneyPrompt(promptText) {
  let prompt;
  do {
    const raw = await userInput(promptText); // raw string
    prompt = Number(raw); // convert to number
    if (Number.isNaN(prompt) || prompt <= 0) {
      console.log("Invalid Input!\n");
    }
  } while (Number.isNaN(prompt) || prompt <= 0);
  return prompt;
}
export async function askYesNo(promptText) {
  const validInputs = ["Y", "y", "N", "n"];
  let prompt;
  do {
    prompt = await userInput(`\n${promptText} [Y/N]: `);
    if (!validInputs.includes(prompt)) {
      console.log("Invalid Input!\n");
    }
  } while (!validInputs.includes(prompt));
  return prompt;
}
