const { BN } = require("bn.js");
const Block = require("./block");
const Transaction = require("./transaction");
const Validation = require("./validation");

class BlockChain {
  HANDICAP = 0x4000000;

  constructor(user, blockchain) {
    this.blockchain = blockchain || [Block.getGenesis()];
    this.transactions = [];
    this.user = user || "SYSTEM";
    this.wantedTimeSecond = 20;
    this.wantedBlockCount = 20;
    this.multipleNumber = 4;
  }

  slowResolve() {
    return new Promise((resolve) => setTimeout(resolve.bind(), 0));
  }

  addBlock(block) {
    if (Validation.isValidBlock(this.blockchain, block)) {
      this.blockchain.push(block);
    }
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

  getTarget(bits) {
    let bits16 = parseInt("0x" + bits.toString(16), 16);
    let exponent = bits16 >> 24;
    let mantissa = bits16 & 0xffffff;
    let target = mantissa * 2 ** (8 * (exponent - 3));
    let target16 = target.toString(16);
    let k = Buffer.from("0".repeat(64 - target16.length) + target16, "hex");
    return k.toString("hex");
  }

  getTargetHaveHandicap(bits) {
    return this.getTarget(bits + this.HANDICAP);
  }

  bitsToDifficulty(bits) {
    const maximumTarget = "0x00000000ffff" + "0".repeat(64 - 12);
    const currentTarget = "0x" + this.getTarget(bits);
    return parseInt(maximumTarget, 16) / parseInt(currentTarget, 16);
  }

  getLastBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }

  async mining(isStop) {
    console.log("mining");
    const lastBlock = this.getLastBlock();
    const newBlock = new Block({
      index: lastBlock.index + 1,
      previousHash: lastBlock.hash,
      timestamp: Date.now(),
      transactions: this.transactions,
      nonce: 0,
    });
    const bits = lastBlock.bits;
    const target = this.getTargetHaveHandicap(bits);
    console.log("현재 난이도 타겟값:", target);
    while (target <= newBlock.getHash()) {
      newBlock.nonce++;
      await this.slowResolve();
      if (isStop) return;
    }
    const difficulty = this.getDifficulty(bits);
    newBlock.hash = newBlock.getHash();
    newBlock.difficulty = difficulty;
    newBlock.bits = this.difficultyToBits(difficulty);
    console.log("새로운 블록:", newBlock);
    return newBlock;
  }

  getDifficulty(bits) {
    let difficulty = this.bitsToDifficulty(bits);
    const lastBlock = this.getLastBlock();
    if (lastBlock.index > 0 && lastBlock.index % this.wantedBlockCount == 0) {
      console.log(`10개 시간 비교`);
      let reTargetTime =
        this.blockchain[this.blockchain.length - this.wantedBlockCount]
          .timestamp;
      let lastTime = lastBlock.timestamp;
      let elaspedTime =
        (lastTime - reTargetTime) / this.wantedBlockCount / 1000;
      console.log(`시간 비교 값: ${elaspedTime}초`);
      let multiple =
        elaspedTime > this.wantedTimeSecond
          ? 1 / this.multipleNumber
          : this.multipleNumber;
      difficulty = difficulty * multiple;
      console.log(`최종 난이도: ${difficulty}`);
    }
    return difficulty;
  }

  difficultyToBits(difficulty) {
    const maximumTarget = "0x00000000ffff" + "0".repeat(64 - 12);
    const difficulty16 = difficulty.toString(16);
    let target = parseInt(maximumTarget, 16) / parseInt(difficulty16, 16);
    let num = new BN(target.toString(16), "hex");
    let compact, nSize, bits;
    nSize = num.byteLength();
    if (nSize <= 3) {
      compact = num.toNumber();
      compact <<= 8 * (3 - nSize);
    } else {
      compact = num.ushrn(8 * (nSize - 3)).toNumber();
    }
    if (compact & 0x800000) {
      compact >>= 8;
      nSize++;
    }
    bits = (nSize << 24) | compact;
    if (num.isNeg()) {
      bits |= 0x800000;
    }
    bits >>>= 0;
    return parseInt(bits.toString(10));
  }
}

/* const blockchain = new BlockChain();
const transaction1 = new Transaction({
  from: "user1",
  to: "user2",
  amount: 10,
});
const transaction2 = new Transaction({
  from: "user1",
  to: "user2",
  amount: 10,
});
const transaction3 = new Transaction({
  from: "user1",
  to: "user2",
  amount: 10,
});
const transaction4 = new Transaction({
  from: "user1",
  to: "user2",
  amount: 10,
});

(async () => {
  while (blockchain.blockchain.length <= 1) {
    blockchain.addTransaction(transaction1);
    blockchain.addTransaction(transaction2);
    blockchain.addTransaction(transaction3);
    blockchain.addTransaction(transaction4);
    blockchain.addBlock(await blockchain.mining());
  }
})();

const w = new Wallet(blockchain);

console.log(w.getMyAmount("user1"));
console.log(w.getMyAmount("user2")); */

module.exports = BlockChain;
