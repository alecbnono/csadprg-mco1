import { Account } from "../types/Account";

export function deposit(account: Account, amount: number): boolean {
  if (amount <= 0) {
    return false;
  } else {
    account.balance += amount;
    return true;
  }
}

export function withdraw(account: Account, amount: number): boolean {
  if (account.balance <= 0 || amount <= 0) {
    return false;
  } else {
    account.balance -= amount;
    return true;
  }
}

export function setName(account: Account, name: string): void {
  account.name = name;
  account.balance = 0;
}

export function computeInterest(principal: number): number {
  return Math.round(principal * (0.05 / 365) * 100) / 100;
}
