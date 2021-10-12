class Bank {
  static nextNumber = 1;
  constructor() {
    this._accounts = [];
  }

  addAccount() {
    const newAccount = new Account(Bank.nextNumber);
    this._accounts.push(newAccount);
    Bank.nextNumber += 1;
    return newAccount._number;
  }

  addSavingsAccount(interest) {
    const newSavingsAccount = new SavingsAccount(Bank.nextNumber, interest);
    this._accounts.push(newSavingsAccount);
    Bank.nextNumber += 1;
    return newSavingsAccount._number;
  }
  addCheckingAccount(overdraft) {
    const newCheckingAccount = new CheckingAccount(Bank.nextNumber, overdraft);
    this._accounts.push(newCheckingAccount);
    Bank.nextNumber += 1;
    return newCheckingAccount._number;
  }
  closeAccount(number) {
    this._accounts = this._accounts.filter((b) => b._number != number);
  }
  accountReport() {
    let res = "";
    for (let i = 0; i < this._accounts.length; i++) {
      res += this._accounts[i].toString() + " \n";
    }
    return res;
  }

  endOfMonth() {
    let res = "";
    for (let i = 0; i < this._accounts.length; i++) {
      res += this._accounts[i].endOfMonth() + " \n";
    }
    return res;
  }
}
