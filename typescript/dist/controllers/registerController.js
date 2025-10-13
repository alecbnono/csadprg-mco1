import { setName } from "../services/accountServices.js";
import { userInput } from "../utils/input.js";
import { askYesNo } from "../utils/prompts.js";
export async function navigateRegister(account) {
  let prompt;
  let name;
  do {
    console.log("\nRegister Account Name");
    name = await userInput("Account Name: ");
    prompt = await askYesNo("Back to the Main Menu");
  } while (prompt !== "Y" && prompt !== "y");
  setName(account, name);
}
