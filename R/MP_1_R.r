# ********************
# Last names: Calibo, Nono, Panlilio, So
# Language: R
# Paradigm(s): Functional
# ********************

# Prints decorative borders for the entire program.

printBorders<- function() {
    cat("\n========================================\n")
}

# Prints the main menu for the program

printMainMenu <- function() {
    cat("Welcome to Banko Lasalyano!\n\n")
    cat("Select Transaction\n")
    cat("[1] Register Account Name\n")
    cat("[2] Deposit Amount\n")
    cat("[3] Withdraw Amount\n")
    cat("[4] Currency Exchange\n")
    cat("[5] Record Exchange Rates\n")
    cat("[6] Show Interest Computation\n")
    cat("[7] Exit\n")
}

# Prints the list of available currencies along with their codes and exchange rates.

printCurrencies <- function(exchange_Rates) {
    cat("Available Currencies:\n")
    for (i in seq_along(exchange_Rates)) {
        line <- paste0("[", i, "] ", exchange_Rates[[i]][[1]], " (", exchange_Rates[[i]][[2]], ")")
        cat(line, "\n")
    }
    cat("\n")
}

# Registers a new account name, ensuring the name is not empty and allowing the user to return to the main menu.
# @return The registered account name.

registerName <- function() {
    cat("Register Account Name\n")

    repeat{
        repeat{
            name1 <- readline(prompt = "Account Name: ") # Prompt user for account name
            if (nchar(name1) == 0) { #checks if name is empty
                cat("Name cannot be empty. Please try again.\n")
            } else {
                break
            }
        }

        repeat {
            choice <- tolower(trimws(readline(prompt = "\nBack to the Main Menu (Y/N): "))) #prompt user to return to main menu
            if (choice == "y") {
                return(name1) 
            } else if (choice == "n") {
                printBorders()
                break  #breaks out to outer loop to re-enter name
            } else {
                cat("Please input Y or N only.\n")
            }
        }
    }
}

# Handles depositing an amount into the account, ensuring valid input and allowing the user to return to the main menu.
# @param name The account name.
# @param balance The current account balance.
# @param currency The currency type.
# @return The updated account balance.

depositAmount <- function(name, balance, currency) {
    cat("Deposit Amount\n")
    cat("Account Name:", name, "\n")
    cat(sprintf("Current Balance: %.2f\n", balance))
    cat("Currency:", currency, "\n\n")

    repeat {
        repeat {
            amount <- readline(prompt = "Deposit Amount: ") #prompt user for deposit amount
            num <- suppressWarnings(as.numeric(amount)) #convert input to numeric
            
            if (!is.na(num) && num == as.numeric(num) && num > 0) { #check if input is a positive numeric value
                balance <- balance + num
                cat(sprintf("Updated Balance: %.2f\n", balance))
                break  
            } else {
                cat("Invalid input. Please enter a positive real value.\n")
            }
        }

        repeat {
            choice <- tolower(trimws(readline(prompt = "\nBack to the Main Menu (Y/N): "))) #prompt user to return to main menu
            if (choice == "y") {
                return(balance) 
            } else if (choice == "n") {
                printBorders() # prints borders and breaks to outer loop to re-enter deposit amount
                break  
            } else {
                cat("Please input Y or N only.\n")
            }
        }
    }
}

# Handles withdrawing an amount from the account, ensuring valid input and allowing the user to return to the main menu.
# @param name The account name.
# @param balance The current account balance.
# @param currency The currency type.
# @return The updated account balance.

withdrawAmount <- function(name, balance, currency) {
    
    cat("Withdraw Amount\n")
    cat("Account Name:", name, "\n")
    cat(sprintf("Current Balance: %.2f\n", balance))
    cat("Currency:", currency, "\n\n")

    repeat {
        repeat {

            amount <- readline(prompt = "Withdraw Amount: ") #prompt user for deposit amount
            num <- suppressWarnings(as.numeric(amount)) #convert input to numeric
            
            if (!is.na(num) && num == as.numeric(num) && num > 0) { #check if input is a positive numeric value
                if (num > balance) { #check if balance can accomodate the input
                    cat("Insufficient balance. Please enter a smaller amount.\n")
                    next
                }
                else{
                    balance <- balance - num #substracts input from balance
                    cat(sprintf("Updated Balance: %.2f\n", balance))
                    break  
                }
            } else {
                cat("Invalid input. Please enter a positive integer amount.\n")
            }
        }

        if (balance == 0){
            return(balance)
        }
        else{
            repeat {
                choice <- tolower(trimws(readline(prompt = "\nBack to the Main Menu (Y/N): "))) #prompt user to return to main menu
                if (choice == "y") {
                    return(balance) 
                } else if (choice == "n") {
                    printBorders() # prints borders and breaks to outer loop to re-enter withdraw amount
                    break  
                } else {
                    cat("Please input Y or N only.\n")
                }
            }
        }
    }
}

# Allows the user to record and update exchange rates for different currencies, ensuring valid input and allowing the user to return to the main menu.
# @param exchange_Rates A list of exchange rates for different currencies.
# @return The updated list of exchange rates.

recordExchangeRates <- function(exchange_Rates) {
    cat("Record Exchange Rate\n")
    printCurrencies(exchange_Rates)

    repeat {
        option_input <- readline(prompt = "Select Foreign Currency: ")  
        num <- suppressWarnings(as.numeric(option_input))        
        option <- as.integer(num)       

        if (is.na(option) || num != as.integer(num) || option < 1 || option > length(exchange_Rates)) { #check if input is a valid integer option
            cat("Invalid input. Please enter a valid integer option.\n")
        } else {
            repeat {
                rate_input <- readline(prompt = "Exchange Rate: ") #prompt user for new exchange rate
                new_rate <- suppressWarnings(as.numeric(rate_input))
                
                if (!is.na(new_rate) && new_rate > 0) {
                    exchange_Rates[[option]][[3]] <- new_rate #updates the exchange rate for the selected currency
                    break
                } else {
                    cat("Invalid input. Please enter a positive number.\n")
                }
            }

            repeat {
                choice <- tolower(trimws(readline(prompt = "\nBack to the Main Menu (Y/N): ")))
                if (choice == "y") {
                    return(exchange_Rates) #returns updated exchange rates to main function
                } else if (choice == "n") {
                    printBorders()
                    break
                } else {
                    cat("Please input Y or N only.\n")
                }
            }
        }
    }
}

# Handles currency exchange between different currencies, ensuring valid input and allowing the user to return to the main menu.
# @param exchange_Rates A list of exchange rates for different currencies.

currencyExchange <- function(exchange_Rates) {

    cat("\nForeign Currency Exchange\n")
    cat("Source Currency Option:\n")
    
    repeat {
        repeat{
            printCurrencies(exchange_Rates)
            option_input <- readline(prompt = "Source Currency: ")  #prompt user for source currency
            num <- suppressWarnings(as.numeric(option_input))  #convert input to numeric
            currency_Option1 <- as.integer(num)  #convert input to integer

            if (is.na(currency_Option1) || num != as.integer(num) || currency_Option1 < 1 || currency_Option1 > length(exchange_Rates)) {
                cat("Invalid input. Please enter a valid integer option.\n")
            } else {
                break
            }
        }

        repeat{
            option_input <- readline(prompt = "Source Amount: ")  
            num <- suppressWarnings(as.numeric(option_input))   
            amount <- as.numeric(num)  

            if (is.na(amount) || num != as.numeric(num) || amount <= 0) { 
                cat("Invalid input. Please enter a valid numeric input.\n")
            } else {
                break
            }
        }

        repeat{
            printCurrencies(exchange_Rates)
            option_input <- readline(prompt = "Exchange Currency: ")  
            num <- suppressWarnings(as.numeric(option_input)) 
            currency_Option2 <- as.integer(num)       

            if (is.na(currency_Option2) || num != as.integer(num) || currency_Option2 < 1 || currency_Option2 > length(exchange_Rates)) {
                cat("Invalid input. Please enter a valid integer option.\n")
            } else if (currency_Option2 == currency_Option1) { # check if source and target currencies are the same
                cat("Source and target currencies cannot be the same. Please select a different target currency.\n")
            } else {
                break
            }
        }
        
        # Perform currency conversion. Amount in source currency is divided by the rate of the source currency 
        # and then multiplied by the rate of the target currency to get the amount in target currency.
        converted_Amount <- round((amount / exchange_Rates[[currency_Option2]][[3]]) * exchange_Rates[[currency_Option1]][[3]], 2)
        cat(sprintf("Converted Amount: %.2f\n", converted_Amount)) 

        choice <- tolower(trimws(readline(prompt = "\nConvert another currency (Y/N)? . . .: ")))
        if (choice == "y") {
            next
        } else if (choice == "n") {
            printBorders()
            break  
        } else {
            cat("Please input Y or N only.\n")
        }
    }
}

# Displays interest computation over a specified number of days, ensuring valid input and allowing the user to return to the main menu.
# @param name The account name.
# @param balance The current account balance.
# @param currency The currency type.

showInterestComputation <- function(name, balance, currency) {
    interest_rate <- 0.05
    interest <- round(balance * (interest_rate / 365.0), 2)
    cat("Account Name: ", name, "\n")
    cat(sprintf("Current Balance: %.2f\n", balance))
    cat("Currency:", currency, "\n")
    cat(sprintf("Interest Rate: %.0f%%\n", interest_rate * 100))

    repeat {
        repeat{
            input <- readline(prompt = "\nTotal Number of Days: ")  
            days <- suppressWarnings(as.integer(input))        
            if (is.na(days) || days != as.integer(days) || days < 1) { #check if input is a valid integer of at least 1
                cat("\nPlease input a valid integer input of at least 1 day.\n")
            } else {
                cat("\nDay | Interest | Balance |\n")
                for (i in 1:days){ #loop to display interest and balance for each day until inputted integer
                    cat(sprintf("%-3d | %-8.2f | %-8.2f|\n", i, interest, balance + interest * i))
                }
                break
            }
        }
        

        choice <- tolower(trimws(readline(prompt = "\nBack to the Main Menu (Y/N): ")))
        if (choice == "n") { 
            printBorders() # prints borders and breaks to outer loop to re-enter number of days
            next
        } else if (choice == "y") {
            break
        } else {
            cat("Please input Y or N only.\n")
        }
    }
}

# Main function to run the banking application.

main <- function() {
    name <- NULL
    balance <- 1000.0 
    currency <- "PHP"
    PHP_rate <- list("Philippine Peso", "PHP", 1)
    USD_rate <- list("United States Dollar", "USD", 1)
    JPY_rate <- list("Japanese Yen ", "JPY", 1)
    GBP_rate <- list("British Pound Sterling ", "GBP", 1)
    EUR_rate <- list("Euro", "EUR", 1)
    CNY_rate <- list("Chinese Yuan Renminni", "CNY", 1) 

    exchange_Rates <- list(PHP_rate, USD_rate, JPY_rate, GBP_rate, EUR_rate, CNY_rate)
    repeat {
        printBorders()
        printMainMenu()
        printBorders()
        input <- readline(prompt = "Select an option: ")  
        num <- suppressWarnings(as.numeric(input))        
        option <- as.integer(num)       
        if (!is.na(option) && num == as.integer(num)) {
            if (option == 1) {
                printBorders()
                name <- registerName()
            } else if (option >= 2 && option <= 6) {
                if (is.null(name)) {
                    cat("Please register an account first.\n")
                } else if (option == 2) {
                    printBorders()
                    balance <- depositAmount(name, balance, currency)
                } else if (option == 3) {
                    if (balance == 0){
                        printBorders()
                        cat("No balance to withdraw")
                    }
                    else{
                        printBorders()
                        balance <- withdrawAmount(name, balance, currency)
                    }
                } else if (option == 4) {
                    printBorders()
                    currencyExchange(exchange_Rates)
                } else if (option == 5) {
                    printBorders()
                    exchange_Rates <- recordExchangeRates(exchange_Rates)
                    cat(exchange_Rates[[2]][[3]])
                } else if (option == 6) {
                    printBorders()
                    showInterestComputation(name, balance, currency)
                }
            } 
            else if (option == 7) {
                printBorders()
                cat("Exiting program. Goodbye!\n")
                printBorders()
                break
            }
            else {
                cat("Invalid option. Please try again.\n")
            }
        } else {
            cat("Invalid input. Please enter an integer value.\n")
        }
    }
}

main()