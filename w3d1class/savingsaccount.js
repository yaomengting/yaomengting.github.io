class SavingsAccount extends Account {
  constructor(number, interest) {
    super(number);
    this._interest = interest;
  }

  getInterest() {
    return this._interest;
  }

  setInterest(interest) {
    if (interest < 0) {
      throw new RangeError("Interest has to be greater than zero");
    }
    this._interest = interest;
  }

  addInterest() {
    let interestAmount = (this._balance * this._interest) / 100;
    this._balance += interestAmount;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new RangeError("Withdraw amount has to be greater than zero");
    }
    if (amount > this._balance) {
      throw Error("Insufficient funds");
    }
    this._balance -= amount;
  }

  toString() {
    return "SavingsAccount " + this._number + ": balance " + this._balance;
  }

  endOfMonth() {
    return (
      "Interest added SavingsAcccount" +
      this._number +
      ": balance " +
      this._balance +
      " interest :" +
      this._interest
    );
  }
}
