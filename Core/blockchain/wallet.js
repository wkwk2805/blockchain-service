class Wallet {
  constructor(blockchain) {
    const blocks = blockchain?.blockchain;
    this.transactions = blocks
      ?.map((block) => block.transactions)
      ?.reduce((acc, cur) => acc.concat(cur));
  }
  getMyAmount(user) {
    let from = this.transactions
      .filter((e) => e.from == user)
      .map((e) => e.amount)
      .reduce((acc, cur) => acc * 1 + cur * 1, 0);
    let to = this.transactions
      .filter((e) => e.to == user)
      .map((e) => e.amount)
      .reduce((acc, cur) => acc * 1 + cur * 1, 0);
    const amount = to - from;
    console.log(`${user}님의 남아있는 코인은 : ${amount}coin입니다`);
    return amount;
  }
}

module.exports = Wallet;
