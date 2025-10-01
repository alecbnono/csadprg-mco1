"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deposit = deposit;
exports.withdraw = withdraw;
exports.setName = setName;
function deposit(account, amount) {
    if (amount <= 0) {
        return false;
    }
    else {
        account.balance += amount;
        return true;
    }
}
function withdraw(account, amount) {
    if (account.balance <= 0 || amount <= 0) {
        return false;
    }
    else {
        account.balance -= amount;
        return true;
    }
}
function setName(account, name) {
    account.name = name;
}
