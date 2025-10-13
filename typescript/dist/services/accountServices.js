export function deposit(account, amount) {
    if (amount <= 0) {
        return false;
    }
    else {
        account.balance += amount;
        return true;
    }
}
export function withdraw(account, amount) {
    if (account.balance <= 0 || amount <= 0) {
        return false;
    }
    else {
        account.balance -= amount;
        return true;
    }
}
export function setName(account, name) {
    account.name = name;
    account.balance = 0;
}
export function computeInterest(principal) {
    return Math.round(principal * (0.05 / 365) * 100) / 100;
}
