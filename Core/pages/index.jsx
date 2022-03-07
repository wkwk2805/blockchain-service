import React, { useEffect } from "react";
import BlockChain from "../blockchain/blockchain";
import Transaction from "../blockchain/transaction";
import Message from "../blockchain/message";
import ClientMessageHandler from "../blockchain/clientMessageHandler";

const blockchain = new BlockChain();

const Index = () => {
  let ws;
  let isStop = false;
  let websocketServerUrl = "192.168.56.1:8080";

  useEffect(() => {
    connectWS();
  }, []);

  const connectWS = () => {
    const url = `ws://${websocketServerUrl}`;
    console.log("Connect WebSocket server - " + url);
    localStorage.setItem("blockchain", JSON.stringify(blockchain.blockchain));
    ws = new WebSocket(url);
    ws.onmessage = (data) =>
      new ClientMessageHandler(blockchain).onMessage(data);
  };

  const send = (data) => {
    ws.send(JSON.stringify(new Message(data)));
  };

  const startMining = async () => {
    console.log("startMining");
    isStop = false;
    while (!isStop) {
      const newBlock = await blockchain.mining(isStop);
      blockchain.addBlock(newBlock);
      send({ action: Message.END_MINING, data: blockchain.blockchain });
    }
  };

  const stopMining = () => {
    console.log("stopMining");
    isStop = true;
  };

  const sendTransactionData = () => {
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const amount = document.getElementById("amount").value;
    send({
      action: Message.ADD_TRANSACTION,
      data: new Transaction({ from, to, amount }),
    });
  };

  return (
    <div>
      <h1>Transaction Page</h1>
      <div>
        <div>
          <label htmlFor="from">From: </label>
          <input type="text" id="from" />
        </div>
        <div>
          <label htmlFor="to">To: </label>
          <input type="text" id="to" />
        </div>
        <div>
          <label htmlFor="amount">Amount: </label>
          <input type="text" id="amount" />
        </div>
        <div>
          <button onClick={sendTransactionData}>sendTransactionData</button>
        </div>
      </div>
      <h1>Mining Page</h1>
      <button onClick={startMining}>startMining</button>
      <button onClick={stopMining}>stopMining</button>
    </div>
  );
};

export default Index;
