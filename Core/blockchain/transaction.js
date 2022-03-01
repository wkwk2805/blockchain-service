class Transaction {
  constructor(data) {
    this.from = data.from;
    this.to = data.to;
    this.amount = data.amount;
    this.timestamp = Date.now();
  }
}

module.exports = Transaction;
