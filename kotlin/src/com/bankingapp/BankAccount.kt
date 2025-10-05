package com.bankingapp

class BankAccount {
    private var balance: Double = 0.0
    private val name: String
    private val currency: String = "PHP"

    public constructor(name: String) {
        this.name = name
    }

    fun deposit(amount : Double) {
        balance += amount
    }

    fun withdraw(amount : Double) {
        if (amount <= balance) {
            balance -= amount
        } else {
            println("Insufficient funds")
        }
    }

    fun computeInterest() = this.balance * (0.05 / 365)

    fun getName() : String = name

    fun getCurrency() : String = currency

    fun getBalance() : Double = balance
}