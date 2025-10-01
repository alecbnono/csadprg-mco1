"use strict";

async function fetchExchangeRates(base = "PHP") {
  try {
    const res = await fetch(`https://open.er-api.com/v6/latest/${base}`);
    const data = await res.json();

    const exchangeRates = {
      PHP: data.rates.PHP,
      USD: Number((1 / data.rates.USD).toFixed(2)),
      JPY: Number((1 / data.rates.JPY).toFixed(2)),
      GBP: Number((1 / data.rates.GBP).toFixed(2)),
      EUR: Number((1 / data.rates.EUR).toFixed(2)),
      CNY: Number((1 / data.rates.CNY).toFixed(2)),
    };

    return exchangeRates;
  } catch (err) {
    console.error("Error fetching exchange rates:", err.message);

    const exchangeRates = {
      PHP: 1,
      USD: 1,
      JPY: 1,
      GBP: 1,
      EUR: 1,
      CNY: 1,
    };

    return exchangeRates;
  }
}

export const rates = fetchExchangeRates();
