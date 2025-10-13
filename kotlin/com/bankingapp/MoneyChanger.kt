package com.bankingapp

/**
 * This class is responsible for storing exchange rates and computing exchange values.
 * Philippine peso serves as the base currency.
 *
 * Core Responsibilities
 *  - Store exchange rates
 *  - Update exchange rates
 *  - Compute exchange values
 *
 *  @author Joshua Calibo
 *  @since September 24, 2025
 */
class MoneyChanger {
    private val exchangeRate = mutableMapOf("PHP" to 1.00, "USD" to 58.10, "JPY" to 0.39,
            "GBP" to 78.08, "EUR" to 68.12, "CNY" to 8.16)
    private val currencyName = mapOf("PHP" to "Philippine Peso", "USD" to "United State Dollar", "JPY" to "Japanese Yen",
        "GBP" to "British Pound Sterling", "EUR" to "Euro", "CNY" to "Chinese Yuan Renminni")

    /**
     * Computes the equivalent of a currency into another by converting it to PHP and
     * converting it again into the target currency.
     *
     * @param srcCurrency Symbol of the source currency.
     * @param destCurrency Symbol of the destination currency.
     * @param amount The value in the source currency to be converted.
     */
    public fun computeExchangeValue(srcCurrency: String, destCurrency: String, amount: Double): Double {
        return if (srcCurrency != "PHP") {
            val phpValue = amount * getExchangeRate(srcCurrency)
            phpValue / getExchangeRate(destCurrency)
        } else {
            amount / getExchangeRate(destCurrency)
        }
    }

    /**
     * Returns the exchange rate of a given currency.
     *
     * @param currency The symbol of the currency whose exchange rate will be returned.
     */
    public fun getExchangeRate(currency: String): Double {
        return exchangeRate[currency]!!
    }

    /**
     * Sets the exchange rate of a given currency.
     *
     * @param currency The symbol of the currency whose exchange rate will be updated.
     * @param rate The new exchange rate for the given currency.
     */
    public fun setExchangeRate(currency: String, rate: Double) {
        exchangeRate[currency] = rate
    }
}