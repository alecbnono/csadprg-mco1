import { Account } from "../types/Account";
import { deposit } from "../services/accountServices";
import { askYesNo, moneyPrompt } from "../utils/prompts";

export async function navigateDeposit(account: Account): Promise<void> {
  if (account.name !== null) {
    let prompt: string;
    do {
      console.log("\nDeposit Amount");
      console.log(`Account Name: ${account.name}`);
      console.log(`Current Balance: ${account.balance}`);
      console.log(`Currency: PHP\n`);

      let valid: boolean = false;
      let money: number;

      do {
        // checks if number
        money = await moneyPrompt("Deposit Amount: ");

        // checks if number is > 0
        valid = deposit(account, money);

        if (valid === false) {
          console.log("Invalid Input\n");
        }
      } while (valid === false);

      console.log(`Updated Balance: ${account.balance}`);

      prompt = await askYesNo("Back to the Main Menu");
    } while (prompt !== "Y" && prompt !== "y");
  } else {
    console.log("Please Register First!\n");
  }
}
