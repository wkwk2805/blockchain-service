const hashs = require("hash.js");

class Block {
  constructor(data) {
    if (!data) return;
    this.index = data.index;
    this.previousHash = data.previousHash;
    this.timestamp = data.timestamp;
    this.nonce = data.nonce;
    this.transactions = data.transactions;
    this.bits = data.bits;
    this.difficulty = data.difficulty;
    this.hash = data.hash;
  }

  static getGenesis() {
    return new Block({
      index: 0,
      previousHash: 0,
      timestamp: Date.now(),
      transactions: [],
      bits: 486604799,
      difficulty: 1,
      nonce: 0,
      hash: "GENESIS BLOCK",
    });
  }

  getHash() {
    return hashs
      .sha256()
      .update(
        this.index +
          this.previousHash +
          this.timestamp +
          JSON.stringify(this.transactions) +
          this.nonce
      )
      .digest("hex");
  }
}

module.exports = Block;
