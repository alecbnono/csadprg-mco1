"use strict";
/**
 * @fileoverview Provides core account-related services for the banking system.
 * This module includes basic account operations such as depositing, withdrawing,
 * setting account names, and computing daily interest.
 *
 * @module services/accountServices
 */

/**
 * Deposits a specified amount into the given account.
 *
 * @function deposit
 * @param {Object} account - The account object to deposit into.
 * @param {string} account.name - The name associated with the account.
 * @param {number} account.balance - The current balance of the account.
 * @param {number} amount - The amount to deposit.
 * @returns {boolean} `true` if the deposit was successful, `false` if the amount is invalid.
 */
export function deposit(account, amount) {
  if (amount <= 0) {
    return false;
  } else {
    account.balance += amount;
    return true;
  }
}

/**
 * Withdraws a specified amount from the given account.
 *
 * @function withdraw
 * @param {Object} account - The account object to withdraw from.
 * @param {string} account.name - The name associated with the account.
 * @param {number} account.balance - The current balance of the account.
 * @param {number} amount - The amount to withdraw.
 * @returns {boolean} `true` if the withdrawal was successful, `false` if the balance is insufficient or the amount is invalid.
 */
export function withdraw(account, amount) {
  if (account.balance <= 0 || amount <= 0) {
    return false;
  } else {
    account.balance -= amount;
    return true;
  }
}

/**
 * Sets the account holder's name and initializes their balance.
 *
 * @function setName
 * @param {Object} account - The account object to update.
 * @param {string} name - The name to assign to the account.
 * @returns {void}
 */
export function setName(account, name) {
  account.name = name;
  account.balance = 0;
}

/**
 * Computes the daily interest for a given principal amount at a 5% annual rate.
 *
 * @function computeInterest
 * @param {number} principal - The principal amount to compute interest for.
 * @returns {number} The computed daily interest, rounded to two decimal places.
 */
export function computeInterest(principal) {
  return Math.round(principal * (0.05 / 365) * 100) / 100;
}
