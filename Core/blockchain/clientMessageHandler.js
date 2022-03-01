const Message = require("./message");
const Transaction = require("./transaction");

class ClientMessageHandler {
  constructor(blockchain) {
    this.blockchain = blockchain;
  }

  onMessage(data) {
    const message = Message.fromJson(data.data);
    switch (message.action) {
      case Message.INIT_BLOCKCHAIN:
        this.initBlockchain(message.data);
        break;
      case Message.SAVE_BLOCKCHAIN:
        this.saveBlockchain(message.data);
        break;
      case Message.ADD_TRANSACTION:
        this.addTransaction(message.data);
      default:
        break;
    }
  }

  initBlockchain(blockchainData) {
    console.log("INIT_BLOCKCHAIN");
    if (blockchainData) this.blockchain.blockchain = blockchainData;
    localStorage.setItem(
      "blockchain",
      JSON.stringify(this.blockchain.blockchain)
    );
    console.log("현재 블록체인: ", this.blockchain.blockchain);
  }

  saveBlockchain(blockchainData) {
    console.log("SAVE_BLOCKCHAIN");
    this.blockchain.blockchain = blockchainData;
    localStorage.setItem("blockchain", JSON.stringify(blockchainData));
    console.log("현재 블록체인: ", this.blockchain.blockchain);
  }

  addTransaction(transactionData) {
    console.log("ADD_TRANSACTION");
    const transaction = new Transaction(transactionData);
    if (transaction.from === "SYSTEM") this.blockchain.transactions = [];
    this.blockchain.addTransaction(transaction);
  }
}

module.exports = ClientMessageHandler;
