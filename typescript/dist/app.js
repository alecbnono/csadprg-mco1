import { compileRates } from "./services/exchangeService.js";
import { navigateMainMenu } from "./controllers/mainMenuController.js";
async function main() {
  console.log("Running program...\n");
  let user = {
    name: null,
    balance: 0,
  };
  let rates = await compileRates();
  // console.log(rates);
  navigateMainMenu(user, rates);
}
main();
