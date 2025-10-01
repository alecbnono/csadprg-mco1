import { Account } from "../types/Account.ts";
import { setName } from "../services/accountServices.ts";
import { input } from "../utils/input.ts";
import { askYesNo } from "../utils/prompts.ts";

async function navigateRegister(account: Account) {
  let prompt: string;
  let name: string;
  do {
    console.log("Register Account Name");

    name = input("Account Name: ");

    prompt = askYesNo();
  } while (prompt !== "Y" && prompt !== "y");

  setName(account, name);
}
