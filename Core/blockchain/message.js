class Message {
  static SAVE_BLOCKCHAIN = "SAVE_BLOCKCHAIN";
  static END_MINING = "END_MINING";
  static ADD_TRANSACTION = "ADD_TRANSACTION";
  static INIT_BLOCKCHAIN = "INIT_BLOCKCHAIN";

  constructor(obj) {
    this.action = obj.action;
    this.data = obj.data;
  }

  static fromJson(str) {
    const obj = JSON.parse(str);
    return new Message(obj);
  }
}

module.exports = Message;
