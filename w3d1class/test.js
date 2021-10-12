/* assert.equal() and
assert.throws()used for checking if it a method throws an exception */

describe("account funcions tests", function () {
  let account = new Account(123);

  it("get number", function () {
    assert.equal(123, account.getNumber());
  });
  it("get Balance", function () {
    assert.equal(0, account.getBalance());
  });

  it("deposit", function () {
    account.deposit(100);
    assert.equal(100, account.getBalance());
  });

  it("withdraw", function () {
    account.withdraw(20);
    assert.equal(80, account.getBalance());
  });
});

describe("savings account function tests", function () {
  let account = new SavingsAccount(234, 2);

  it("deposit", function () {
    account.deposit(200);
    assert.equal(200, account.getBalance());
  });

  it("add interest", function () {
    account.addInterest();
    assert.equal(204, account.getBalance());
  });

  it("withdraw", function () {
    account.withdraw(100);
    assert.equal(104, account.getBalance());
  });

  it("get interest", function () {
    assert.equal(2, account.getInterest());
  });

  it("set interest", function () {
    account.setInterest(3);
    assert.equal(3, account.getInterest());
  });

  it("error check", function () {
    const account = new SavingsAccount(1, 1);

    assert.throws(
      () => {
        account.withdraw(-100);
      },
      RangeError,
      "Withdraw amount has to be greater than zero"
    );
  });
});

describe("checking accounts funtions test", function () {
  let account = new CheckingAccount(345, 500);

  it("get overdraft", function () {
    assert.equal(500, account.getOverdraft());
  });

  it("withdraw", function () {
    account.withdraw(300);
    assert.equal(-300, account.getBalance());
  });

  it("toString", function () {
    let str = "CheckingsAccount 345: balance -300";
    assert.equal(str, account.toString());
  });

  it("end of month", function () {
    let str =
      "Warning, low balance CheckingAccount 345: balance :-300 overdraft limit: 500";
    assert.equal(str, account.endOfMonth());
  });

  it("error check", function () {
    assert.throws(
      () => {
        account.withdraw(800);
      },
      Error,
      "Overdraft limit arrived."
    );
  });
});

describe("bank funtions tests", function () {
  let bank = new Bank();
  it("add account", function () {
    assert.equal(1, bank.addAccount());
    assert.equal(2, Bank.nextNumber);
    assert.equal(1, bank._accounts.length);
  });

  it("add savings account", function () {
    assert.equal(2, bank.addSavingsAccount(4));
  });

  it("add checkings account", function () {
    assert.equal(3, bank.addCheckingAccount(200));
  });

  it("close account", function () {
    assert.equal(3, bank._accounts.length);
    bank.closeAccount(1);
    assert.equal(2, bank._accounts.length);
  });

  it("accountReport", function () {
    let res = `SavingsAccount 2: balance 0 
CheckingsAccount 3: balance 0 
`;
    assert.equal(res, bank.accountReport());
  });

  it("end of month", function () {
    let res = `Interest added SavingsAcccount2: balance 0 interest :4 
 
`;
    assert.equal(res, bank.endOfMonth());
  });
});
