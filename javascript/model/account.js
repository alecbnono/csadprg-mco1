"use strict";

class Account {
  constructor(username) {
    this.username = username;
    this.balance = 0;
  }

  getBalance() {
    return this.balance;
  }

  addBalance(amount) {
    if (amount <= 0) {
      return false;
    }
      else {
        this.balance += amount;
          return true;
      }
}
