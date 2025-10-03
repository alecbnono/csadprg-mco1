import { Account } from "./types/Account";
import { ExchangeRate } from "./types/ExchangeRate";
import { compileRates } from "./services/exchangeService";
import { navigateMainMenu } from "./controllers/mainMenuController";

async function main(): Promise<void> {
  console.log("Running program...\n");

  let user: Account = {
    name: null,
    balance: 0,
  };

  let rates: ExchangeRate = await compileRates();

  // console.log(rates);

  navigateMainMenu(user, rates);
}

main();
