import Web3 from "web3";
import SimpleStorage from "./contracts/SimpleStorage.json";

const options = {
  web3: {
    block: false,
    customProvider: new Web3("ws://localhost:8545"),
  },
  contracts: [SimpleStorage],
  events: {
    SimpleStorage: ["Change"],
  },
};

export default options;
