package com.bankingapp

/**
 * This class is responsible for saving a user's banking information.
 *
 * @param name The name of the bank account owner.
 *
 * Core Responsibilities
 *  - Perform adding/subtracting from the user's balance.
 *  - Compute for interest.
 *
 *  @author Joshua Calibo
 *  @since September 24, 2025
 */

class BankAccount {
    private var balance: Double = 0.0
    private val name: String
    private val currency: String = "PHP"

    public constructor(name: String) {
        this.name = name
    }

    /**
     * Adds an amount into the bank account's balance.
     *
     * @param amount The amount to be added.
     */
    fun deposit(amount : Double) {
        balance += amount
    }

    /**
     * Checks if the account has enough balance to fulfill the withdrawal
     * and then deducts the amount from the balance.
     *
     * @param amount The amount to be deducted.
     */
    fun withdraw(amount : Double) {
        if (amount <= balance) {
            balance -= amount
        } else {
            println("Insufficient funds")
        }
    }

    /**
     * Computes the daily interest of the account.
     */
    fun computeInterest() = this.balance * (0.05 / 365)

    /**
     * Returns the account name.
     */
    fun getName() : String = name

    /**
     * Returns the base currency of the account.
     */
    fun getCurrency() : String = currency

    /**
     * Returns the current balance of the account.
     */
    fun getBalance() : Double = balance
}