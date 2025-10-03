import { Account } from "../types/Account";
import { setName } from "../services/accountServices";
import { input } from "../utils/input";
import { askYesNo } from "../utils/prompts";

export async function navigateRegister(account: Account): Promise<void> {
  let prompt: string;
  let name: string;
  do {
    console.log("\nRegister Account Name");

    name = await input("Account Name: ");

    prompt = await askYesNo("Back to the Main Menu");
  } while (prompt !== "Y" && prompt !== "y");

  setName(account, name);
}
