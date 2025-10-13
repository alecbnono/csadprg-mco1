//********************
// Last names: Calibo, Nono, Panlilio, So
// Language: R
// Paradigm(s): Functional
// ********************

use std::io::{self, Write};

fn main() {
    //Variables
    let mut account_name: String = "".to_string();
    let mut balance: f64 = 0.0;
    let currency: String = "PHP".to_string();
    let mut choice = 0;
    let mut exchange: [f64; 6] = [1.0, 58.14, 0.39, 78.04, 67.76, 8.17];


    while choice != 7 {
        println!("");
        let mut back_choice;
        choice = main_menu();
        if choice == 1 {

            loop {
                println!("");
                account_name = register_account();
                balance = 0.0;
                loop {
                    back_choice = back_to_main();
                    if back_choice == 'Y' {
                          break;
                    }
                    else if back_choice != 'Y' && back_choice != 'N' {
                        println!("");
                        println!("Error. Invalid choice.");
                    }
                }
                if back_choice == 'Y' {
                     break;
                }

            }
        }
        else if choice == 2 {
            if account_name != "" {
                loop {
                    println!("");
                    balance = deposit_amount(&account_name, balance, &currency);
                    loop {
                        back_choice = back_to_main();
                        if back_choice == 'Y' {
                             break;
                        }
                        else if back_choice != 'Y' && back_choice != 'N' {
                            println!("");
                            println!("Error. Invalid choice.");
                        }
                    }
                    if back_choice == 'Y' {
                        break;
                    }
                }
            }
            else {
                println!("Error. No account has been registered yet.");
            }
        }
        else if choice == 3 {
            if account_name != "" {
                loop {
                    println!("");
                    balance = withdraw_amount(&account_name, balance, &currency);
                    loop {
                        back_choice = back_to_main();
                        if back_choice == 'Y' {
                             break;
                        }
                        else if back_choice != 'Y' && back_choice != 'N' {
                            println!("");
                            println!("Error. Invalid choice.");
                        }
                    }
                    if back_choice == 'Y' {
                        break;
                    }
                }
            }
            else {
                println!("Error. No account has been registered yet.");
            }
        }
        else if choice == 4 {
            if account_name != "" {
                loop {
                    println!("");
                    let mut source_choice = get_source_currency();
                    source_choice -= 1;
                    let source_amount = get_source_amount();
                    let mut exchange_choice = get_exchange_currency();
                    exchange_choice -= 1;
                    let source_rate = exchange[source_choice as usize];
                    let php_amount = compute_to_php(source_amount, source_rate);
                    let exchange_rate = exchange[exchange_choice as usize];
                    let exchange_amount = compute_to_another_currency(php_amount, exchange_rate);
                    println!("");
                    println!("Exchange Amount: {}", exchange_amount);
                    loop {
                        back_choice = convert_another_currency();
                        if back_choice == 'N' {
                             break;
                        }
                        else if back_choice != 'Y' && back_choice != 'N' {
                            println!("");
                            println!("Error. Invalid choice.");
                        }
                    }
                    if back_choice == 'N' {
                        break;
                    }
                }
            }
            else {
                println!("Error. No account has been registered yet.");
            }
        }
        else if choice == 5 {
            loop {
                println!("");
                let mut choice: i32 = get_currency();
                choice -= 1;
                exchange[choice as usize] = get_rate();
                loop {
                    back_choice = back_to_main();
                    if back_choice == 'Y' {
                       break;
                    }
                    else if back_choice != 'Y' && back_choice != 'N' {
                        println!("");
                        println!("Error. Invalid choice.");
                    }
                }
                if back_choice == 'Y' {
                       break;
                }
            }
        }
        else if choice == 6 {
            if account_name != "" {
                loop {
                    println!("");
                    show_interest(balance, &account_name, &currency);
                    loop {
                        back_choice = back_to_main();
                        if back_choice == 'Y' {
                             break;
                        }
                        else if back_choice != 'Y' && back_choice != 'N' {
                            println!("");
                            println!("Error. Invalid choice.");
                        }
                    }
                    if back_choice == 'Y' {
                        break;
                    }
                }
            }
            else {
                println!("Error. No account has been registered yet.");
            }
        }
    }
}

/*Function that displays the main menu options and gets the choice of the user.
   @return the choice of the user*/
fn main_menu() -> i32 {
    println!("Welcome to Banko Lasalyano");
    println!("Select Transaction:");
    println!("[1] Register Account Name");
    println!("[2] Deposit Amount");
    println!("[3] Withdraw Amount");
    println!("[4] Currency Exchange");
    println!("[5] Record Exchange Rates");
    println!("[6] Show Interest Computation");
    println!("[7] Exit");

    loop {
        println!("");
        print!("Choice: ");
        io::stdout().flush().unwrap();
        let mut choice = String::new();

        io::stdin().read_line(&mut choice).expect("Invalid input");

        match choice.trim().parse::<i32>() {
            Ok(num) if num >= 1 && num <= 7 => {
                return num;
            }
            Ok(_) => {
                println!("Error. Please enter a number between 1 and 7.");
            }
            Err(_) => {
                println!("Invalid input. Please enter a number.");
            }
        }
    }
}


 /*Function that asks the user if he/she would like to go back to the main menu.
    @return the choice of the user*/
fn back_to_main() -> char {
    print!("Back to the Main Menu (Y/N): ");
    io::stdout().flush().unwrap();
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Invalid input");

    let choice: char = input.trim().parse().expect("Invalid input");

    choice
}


/*Function that asks the user for the account name
    @return the account name */
fn register_account() -> String {
    println!("Register Account Name");
    print!("Account Name: ");
    io::stdout().flush().unwrap();
    let mut input = String::new();

    io::stdin().read_line(&mut input).expect("Invalid input");


    input.trim().to_string()

}

 /*Function that allows the user to deposit money into their account.
    @param account_name - the account name.
    @param current_balance - the balance of the user.
    @param currency - the currency of the account
    @return updated balance after deposit*/
fn deposit_amount(account_name: &String, current_balance: f64, currency: &String) -> f64 {
    let updated_balance: f64;
    println!("Deposit Amount");
    println!("Account Name: {}", account_name);
    println!("Current Balance: {}", current_balance);
    println!("Currency: {}", currency);

    loop {
        println!("");
        print!("Deposit Amount: ");
        io::stdout().flush().unwrap();
        let mut input = String::new();

        io::stdin().read_line(&mut input).expect("Invalid input");

        match input.trim().parse::<f64>() {
            Ok(amount) if amount >= 0.0 => {
                updated_balance = current_balance + amount;
                println!("");
                println!("Updated Balance: {}", updated_balance);
                return updated_balance;
            }
            Ok(_) => {
                println!("Error. You cannot deposit a negative amount");
            }
            Err(_) => {
                println!("Invalid input. Please enter a number.");
            }
        }
    }
}

 /*Function that allows the user to withdraw money from their account.
    @param account_name - the account name.
    @param current_balance - the balance of the user.
    @param currency - the currency of the account
    @return updated balance after withdraw*/
fn withdraw_amount(account_name: &String, current_balance: f64, currency: &String) -> f64 {
    let updated_balance: f64;
    println!("Withdraw Amount");
    println!("Account Name: {}", account_name);
    println!("Current Balance: {}", current_balance);
    println!("Currency: {}", currency);
    loop {
        println!("");
        print!("Withdraw Amount: ");
        io::stdout().flush().unwrap();
        let mut input = String::new();

        io::stdin().read_line(&mut input).expect("Invalid input");

        match input.trim().parse::<f64>() {
            Ok(amount) if amount >= 0.0 && amount < current_balance => {
                updated_balance = current_balance - amount;
                println!("");
                println!("Updated Balance: {}", updated_balance);
                return updated_balance;
            }
            Ok(_) => {
                println!("Error. Invalid amount.");
            }
            Err(_) => {
                println!("Invalid input. Please enter a number.");
            }
        }
    }
}

 /*Function that asks which currency would the user want to set the rate of.
    @return the choice of the user*/
fn get_currency() -> i32 {
    println!("Record Exchange Rate");
    println!("");
    println!("[1] Philippine Peso (PHP)");
    println!("[2] United States Dollar (USD)");
    println!("[3] Japanese Yen (JPY)");
    println!("[4] British Pound Sterling (GBP)");
    println!("[5] Euro (EUR)");
    println!("[6] Chinese Yuan Renminni (CNY)");

    loop {
        println!("");
        print!("Select Foreign Currency: ");
        io::stdout().flush().unwrap();
        let mut choice = String::new();

        io::stdin().read_line(&mut choice).expect("Invalid input");
        match choice.trim().parse::<i32>() {
            Ok(num) if num >= 1 && num <= 6 => {
                return num;
            }
            Ok(_) => {
                println!("Error. Please enter a number between 1 and 6.");
            }
            Err(_) => {
                println!("Invalid input. Please enter a number.");
            }
        }
    }
}

 /*Function that asks for the rate the user wants to set.
    @return the rate*/
fn get_rate() -> f64 {
    loop {
        println!("");
        print!("Exhange Rate: ");
        io::stdout().flush().unwrap();
        let mut input = String::new();

        io::stdin().read_line(&mut input).expect("Invalid input");
        match input.trim().parse::<f64>() {
            Ok(amount) if amount >= 0.0 => {
                return amount;
            }
            Ok(_) => {
                println!("Error. You cannot set a negative rate.");
            }
            Err(_) => {
                println!("Invalid input. Please enter a number.");
            }
        }
    }
}

 /*Function that asks the user for the source currency.
    @return the choice of the user*/
fn get_source_currency() -> i32 {
    println!("Foreign Currency Exchange");
    println!("Source Currency Option:");
    println!("[1] Philippine Peso (PHP)");
    println!("[2] United States Dollar (USD)");
    println!("[3] Japanese Yen (JPY)");
    println!("[4] British Pound Sterling (GBP)");
    println!("[5] Euro (EUR)");
    println!("[6] Chinese Yuan Renminni (CNY)");

    loop {
        println!("");
        print!("Source Currency: ");
        io::stdout().flush().unwrap();
        let mut choice = String::new();

        io::stdin().read_line(&mut choice).expect("Invalid input");
        match choice.trim().parse::<i32>() {
            Ok(num) if num >= 1 && num <= 6 => {
                return num;
            }
            Ok(_) => {
                println!("Error. Please enter a number between 1 and 6.");
            }
            Err(_) => {
                println!("Invalid input. Please enter a number.");
            }
        }
    }
}

 /*Function that asks the user for the source amount.
    @return the amount*/
fn get_source_amount() -> f64 {
    loop {
        println!("");
        print!("Source Amount: ");
        io::stdout().flush().unwrap();
        let mut input = String::new();

        io::stdin().read_line(&mut input).expect("Invalid input");
        match input.trim().parse::<f64>() {
            Ok(amount) if amount >= 0.0 => {
                return amount;
            }
            Ok(_) => {
                println!("Error. You cannot exchange a negative amount.");
            }
            Err(_) => {
                println!("Invalid input. Please enter a number.");
            }
        }
    }
}

 /*Function that asks the user for the currency he/she wants to exchange it to.
    @return the choice of the user*/
fn get_exchange_currency() -> i32 {
    println!("");
    println!("Exchanged Currency Options:");
    println!("[1] Philippine Peso (PHP)");
    println!("[2] United States Dollar (USD)");
    println!("[3] Japanese Yen (JPY)");
    println!("[4] British Pound Sterling (GBP)");
    println!("[5] Euro (EUR)");
    println!("[6] Chinese Yuan Renminni (CNY)");

    loop {
        println!("");
        print!("Exchange Currency: ");
        io::stdout().flush().unwrap();
        let mut choice = String::new();

        io::stdin().read_line(&mut choice).expect("Invalid input");
        match choice.trim().parse::<i32>() {
            Ok(num) if num >= 1 && num <= 6 => {
                return num;
            }
            Ok(_) => {
                println!("Error. Please enter a number between 1 and 6.");
            }
            Err(_) => {
                println!("Invalid input. Please enter a number.");
            }
        }
    }
}

 /*Function that converts a certain amount into php based on the exchange rate.
    @param source_amount - the amount that will be exchanged
    @param exchange_rate - the exchange rate
    @return the exchanged amount in php*/
fn compute_to_php(source_amount: f64, exchange_rate: f64) -> f64 {
    source_amount * exchange_rate
}

 /*Function that converts a certain amount in php into another currency.
    @param amount - the amount that will be exchanged
    @param exchange_rate - the exchange rate
    @return the exchanged amount in the desired currency*/
fn compute_to_another_currency(amount: f64, exchange_rate: f64) -> f64 {
    let mut computed_amount = amount/exchange_rate;
    //Round to two decimal places
    computed_amount = (computed_amount * 100.0).round() / 100.0;

    computed_amount
}

 /*Function that asks the user if he/she would like to go back to convert another currency
    @return the choice of the user*/
fn convert_another_currency() -> char {
    print!("Convert another currency (Y/N)?: ");
    io::stdout().flush().unwrap();
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Invalid input");

    let choice: char = input.trim().parse().expect("Invalid input");

    choice
}


 /*Function that shows the user the day by day projected increase based on their current balance and the number of days they desire.
    @param balance - the user's current balance
    @param name - the account name of the user
    @param currency - the currency of the account
    @return the exchanged amount in the desired currency*/
fn show_interest(balance: f64, name: &String, currency: &String) {
    println!("Show Interest Amount");
    println!("Account Name: {}", name);
    println!("Currecny: {}", currency);
    println!("Interest Rate: 5%");

    loop {
        println!("");
        print!("Total Number of Days: ");
        io::stdout().flush().unwrap();
        let mut current_balance = balance;
        let mut input = String::new();
        io::stdin().read_line(&mut input).expect("Invalid input");
        match input.trim().parse::<i32>() {
            Ok(num) if num > 0 => {
                let mut ctr = 0;
                println!("{:<5} | {:<8} | {:<8} |", "Day", "Interest", "Balance");
                let mut interest = current_balance * (0.05/365.0);
                //Round to two decimal places
                interest = (interest * 100.0).round() / 100.0;

                while ctr < num {
                    ctr+=1;
                    current_balance += interest;
                    //Round to two decimal places
                    current_balance = (current_balance * 100.0).round() / 100.0;
                    println!("{:<5} | {:<8} | {:<8} |", ctr, interest, current_balance);
                }
                println!("");
                break;
            }
            Ok(_) => {
                println!("Error. Please enter a positive number.");
            }
            Err(_) => {
                println!("Invalid input. Please enter a number.");
            }
        }
    }
}