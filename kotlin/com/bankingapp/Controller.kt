package com.bankingapp

/**
 * This class serves as the main controller of the program.
 *
 * Core Responsibilities:
 *  - Display menus
 *  - Receive user input
 *  - Initializing the bank account
 *
 *  @author Joshua Calibo
 *  @since September 24, 2025
 *
 */

class Controller(private var forex : MoneyChanger) {
    private var user: BankAccount? = null
    private val currencySelection = mapOf(1 to "PHP", 2 to "USD", 3 to "JPY",
        4 to "GBP", 5 to "EUR", 6 to "CNY")

    /**
     * Prints the main menu and calls other menus the user wishes to access.
     */
    fun mainMenu() {
        var input: Int

        do {
            println("\nWelcome to Banko Lasalyano\n")
            println("Select Transaction:")
            println("[1] Register Account Name")
            println("[2] Deposit Amount")
            println("[3] Withdraw Amount")
            println("[4] Currency Exchange")
            println("[5] Record Exchange Rates")
            println("[6] Show Interest Computation")
            println("[7] Exit")
            print("Input selection: ")

            val strInput = readLine()
            input = strInput?.toIntOrNull() ?: -1

            when (input) {
                1 -> registerAccount()
                2 -> deposit()
                3 -> withdraw()
                4 -> currencyExchange()
                5 -> recordExchangeRates()
                6 -> showInterestComputation()
                7 -> println("Thank you for using Banko Lasalyano!")
                else -> println("Invalid Input. Please try again.")
            }
        } while (input != 7)
    }

    /**
     * Prints the account registration menu and initializes the bank account.
     */
    fun registerAccount() {
        println("\nRegister Account Name")
        print("Account Name: ")

        val userName = readLine()!!

        user = BankAccount(userName)
        do {
            print("Back to the Main Menu (Y/N): ")
            val input = readLine()!!
        } while (input != "Y" && input != "y")
    }

    /**
     * Prints the deposit menu and calls the bank account to perform the deposit.
     */
    fun deposit() {
        if (user == null) {
            userNull()

            return
        }

        println("\nDeposit Amount")
        println("Account Name: ${user?.getName()}")
        println("Current Balance: ${user?.getBalance()}")
        println("Currency: ${user?.getCurrency()}")
        print("\nDeposit Amount: ")
        val input = readLine()

        if (input.isNullOrBlank()) {
            println("Invalid input. Please enter a number.")
            return
        }

        val amount = input.toDoubleOrNull()
        if (amount == null || amount <= 0) {
            println("Invalid amount. Please enter a positive number.")
            return
        }

        user?.deposit(amount)
        println("Updated Balance: %.2f".format(user?.getBalance()))

        do {
            print("\nBack to the Main Menu (Y/N): ")
            val input  = readLine()
        } while (input != "Y" && input != "y")
    }

    /**
     * Prints the withdrawal menu and calls the bank account to perform the withdrawal.
     */
    fun withdraw() {
        if (user == null) {
            userNull()

            return
        }

        println("\nWithdraw Amount")
        println("Account Name: ${user?.getName()}")
        println("Current Balance: %.2f".format(user?.getBalance()))
        println("Currency: ${user?.getCurrency()}")
        print("\nWithdraw Amount: ")
        val input = readLine()

        if (input.isNullOrBlank()) {
            println("Invalid input. Please enter a number.")
            return
        }

        val amount = input.toDoubleOrNull()
        if (amount == null || amount <= 0) {
            println("Invalid amount. Please enter an amount less than your balance.")
            return
        }

        user?.withdraw(amount)
        println("Updated Balance: %.2f".format(user?.getBalance()))

        do {
            print("\nBack to the Main Menu (Y/N): ")
            val input = readLine()
        } while (input != "Y" && input != "y")
    }

    /**
     * Prints the currency exchange menu. Allows the user to get the value of
     * one currency to another.
     */
    fun currencyExchange() {
        if (user == null) {
            userNull()

            return
        }

        var srcCurrency: Int
        var destCurrency: Int
        var srcAmount: Double? = null
        var strInput: String?

        do {
            println("\nForeign Currency Exchange")

            // Source Currency Selection
            println("Source Currency Option: ")
            printCurrencySelection()

            do {
                print("Source Currency: ")
                val strInput = readLine()
                srcCurrency = strInput?.toIntOrNull() ?: -1

                if (srcCurrency !in 1..6) {
                    println("Invalid input. Please enter a valid number.")
                }
            } while (srcCurrency !in 1..6)

            do {
                print("Source Amount: ")
                strInput = readLine()
                val amount = strInput?.toDoubleOrNull()

                if (amount == null || amount < 0) {
                    println("Invalid input. Please enter a positive number.")
                } else {
                    srcAmount = amount
                }
            } while (srcAmount == null)

            strInput = null

            // Dest. Currency Selection
            println("Exchanged Currency Options:")
            printCurrencySelection()

            do {
                print("Exchange Currency: ")
                val strInput = readLine()
                destCurrency = strInput?.toIntOrNull() ?: -1

                if (destCurrency !in 1..6) {
                    println("Invalid input. Please enter a valid number.")
                }
            } while (destCurrency !in 1..6)

            println(
                "Exchange Amount: %.2f\n".format(
                    forex.computeExchangeValue(
                        currencySelection[srcCurrency]!!,
                        currencySelection[destCurrency]!!,
                        srcAmount
                    )
                )
            )

            print("Convert another currency (Y/N)?...")
            strInput = readLine()

            if (strInput != "Y" && strInput != "y") {
                println("Invalid input.")
            }

        } while (strInput == "Y" || strInput == "y")
    }

    /**
     * Allows the user to change the exchange rate for a specific currency.
     */
    fun recordExchangeRates() {
        if (user == null) {
            userNull()

            return
        }

        var currency: Int
        var exchangeRate: Double
        var strInput: String?

        do {
            println("\nRecord Exchange Rate\n")
            printCurrencySelection()

            do {
                print("Exchange Currency: ")
                val strInput = readLine()
                currency = strInput?.toIntOrNull() ?: -1

                if (currency !in 1..6) {
                    println("Invalid input. Please enter a valid number.")
                }
            } while (currency !in 1..6)

            do {
                print("Exchange Rate: ")
                strInput = readLine()
                exchangeRate = strInput?.toDoubleOrNull() ?: -1.0

                if (exchangeRate <= 0) {
                    println("Invalid input. Please input a positive value.")
                }
            } while (exchangeRate <= 0)

            forex.setExchangeRate(currencySelection[currency]!!, exchangeRate)

            print("\nBack to the Main Menu (Y/N): ")
            val input = readLine()
        } while (strInput != "N" && strInput != "n")
    }

    /**
     * Prints the daily interest computation for a given period of time.
     */
    fun showInterestComputation() {
        if (user == null) {
            userNull()

            return
        }

        var strInput: String?
        var dayNum : Int

        println("\nShow Interest Amount")
        println("Account Name: ${user?.getName()}")
        println("Current Balance: ${user?.getBalance()}")
        println("Currency: ${user?.getCurrency()}")
        println("Interest Rate: 5%\n")

        do {
            print("Total Number of Days: ")
            strInput = readLine()
            dayNum = strInput?.toIntOrNull() ?: -1

            if (dayNum < 0) {
                println("Invalid input. Please enter a valid number.")
            }
        } while (dayNum < 0)

        println("Day | Interest | Balance |")
        for (i in 1..dayNum) {
            val interest = user?.computeInterest() ?: 0.0
            user?.deposit(interest)

            println("%3d | %-10.2f | %.2f".format(i, interest, user?.getBalance()))
        }

        println()

        do {
            print("Back to the Main Menu (Y/N): ")
            strInput = readLine()
        } while (strInput != "Y" && strInput != "y")
    }

    /**
     * Prints the currency selection.
     */
    final fun printCurrencySelection() {
        println("[1] Philippine Peso (PHP)")
        println("[2] United State Dollar (USD)")
        println("[3] Japanese Yen (JPY)")
        println("[4] British Pound Sterling (GBP)")
        println("[5] Euro (EUR)")
        println("[6] Chinese Yuan Renminni (CNY)\n")
    }

    /**
     * Responsible for printing the "Back to the Main Menu" loop when an
     * action that requires an account is done without an account.
     */
    final fun userNull() {
        println("Please register an account first.\n")

        do {
            print("Back to the Main Menu (Y/N): ")
            val input  = readLine()
        } while (input != "Y" && input != "y")
    }
}
