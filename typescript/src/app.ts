import { Account } from "./types/Account";
import { ExchangeRate } from "./types/ExchangeRate";
import { compileRates } from "./services/exchangeService";

async function main(): Promise<void> {
  console.log("Running program...");

  let user: Account = {
    name: "",
    balance: 0,
  };

  let rates: ExchangeRate = await compileRates();
}

main();
