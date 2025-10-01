import readline from "readline";
import { displayMainMenu } from "../view/cli.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// helper to ask a question and "return" the answer with async/await
export function input(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

// input validation for the menu navigation
// start & end params represent inclusive ranges
async function menuprompt(start, end) {
  const prompt;
  do {
    prompt = await input("Input Selection: ");
    if (typeof prompt !== "number" || prompt < start || prompt > end) {
      console.log("Invalid Input!");
    }
  } while (typeof prompt !== "number" || prompt < start || prompt > end);

  return prompt;
}

async function askYesNo() {
  const validInputs = ['Y', 'y', 'N', 'n'];
  const prompt;
  do {
    prompt = await input("Input Selection: ");
    if (prompt !== 'Y' ||) {
      console.log("Invalid Input!");
    }
  } while ((typeof prompt !== "number" && prompt < start) || prompt > end);

  return prompt;
}

export async function navigateRegister() {

    const name;

    do {


    }
    while ()

    return 

}

// export async function navigateDeposit()
// export async function navigateWithdraw()
// export async function navigateGetExchange()
// export async function navigateSetExchange()
// export async function navigateInterest()


export async function navigateMainMenu() {
  displayMainMenu();
  const input = menuInput(1, 6);

  switch (input) {
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
    case 6:
      break;
    default:
      break;
  }
}
