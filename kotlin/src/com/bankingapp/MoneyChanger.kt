package com.bankingapp

class MoneyChanger {
    private val exchangeRate = mutableMapOf("PHP" to 1.00, "USD" to 58.10, "JPY" to 0.39,
            "GBP" to 78.08, "EUR" to 68.12, "CNY" to 8.16)
    private val currencyName = mapOf("PHP" to "Philippine Peso", "USD" to "United State Dollar", "JPY" to "Japanese Yen",
        "GBP" to "British Pound Sterling", "EUR" to "Euro", "CNY" to "Chinese Yuan Renminni")

    public constructor() {}

    public fun computeExchangeValue(srcCurrency: String, destCurrency: String, amount: Double): Double {
        return if (srcCurrency != "PHP") {
            val phpValue = amount * getExchangeRate(srcCurrency)
            phpValue / getExchangeRate(destCurrency)
        } else {
            amount / getExchangeRate(destCurrency)
        }
    }
    public fun getExchangeRate(currency: String): Double {
        return exchangeRate[currency]!!
    }

    public fun setExchangeRate(currency: String, rate: Double) {
        exchangeRate[currency] = rate
    }
}