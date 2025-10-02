import { Account } from "../types/Account";
import { withdraw } from "../services/accountServices";
import { askYesNo, moneyPrompt } from "../utils/prompts";

export async function navigateWithdraw(account: Account) {
  if (account.name !== null) {
    let prompt: string;
    do {
      console.log("\nWithdraw Amount");
      console.log(`Account Name: ${account.name}`);
      console.log(`Current Balance: ${account.balance}`);
      console.log(`Currency: PHP\n`);

      let valid: boolean = false;
      let money: number;

      do {
        // checks if number
        money = await moneyPrompt("Withdraw Amount: ");

        // checks if number is > 0 or balance is <= 0
        valid = withdraw(account, money);

        if (valid === false) {
          console.log("Not enough balance!\n");
        }
      } while (valid === false);

      console.log(`Updated Balance: ${account.balance}`);

      prompt = await askYesNo();
    } while (prompt !== "Y" && prompt !== "y");
  } else {
    console.log("Please Register First!\n");
  }
}
