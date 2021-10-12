class CheckingAccount extends Account {
  constructor(number, overdraft) {
    super(number);
    this._overdraft = overdraft;
  }

  getOverdraft() {
    return this._overdraft;
  }

  setOverdraft(overdraft) {
    if (overdraft < 0) {
      throw new RangeError("Overdraft has to be greater than zero");
    }
    this._overdraft = overdraft;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new RangeError("Withdraw amount has to be greater than zero");
    }
    if (amount > this._balance + this._overdraft) {
      throw Error("Overdraft limit arrived.");
    }
    this._balance -= amount;
  }
  toString() {
    return "CheckingsAccount " + this._number + ": balance " + this._balance;
  }

  endOfMonth() {
    // console.log("endOfMonth of checking account calling...");
    if (this._balance < 0) {
      //console.log("balance < 0");
      const res =
        "Warning, low balance CheckingAccount " +
        this._number +
        ": balance :" +
        this._balance +
        " overdraft limit: " +
        this._overdraft;
      //console.log(res);
      return res;
    }
    return '';
  }
}
