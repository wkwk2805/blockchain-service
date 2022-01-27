const path = require("path");
const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "app/src/contracts"),
  networks: {
    develop: {
      // default with truffle unbox is 7545, but we can use develop to test changes, ex. truffle migrate --network develop
      host: "localhost",
      port: 8545,
      network_id: "5777",
    },
    ropsten: {
      // 테스트 네트워크
      provider: () =>
        new HDWalletProvider(
          "design hero treat seat inhale universe sadness shy mosquito expose raw lake",
          `https://ropsten.infura.io/v3/eb7b205e72634599aa65a4c56fdf46b7`
        ),
      network_id: 3, // Ropsten's id
      gas: 5500000, // Ropsten has a lower block limit than mainnet
      gasPrice: 20000000000, // 20 gwei (in wei) (default: 100 gwei)
    },
    rinkeby: {
      // 테스트 네트워크
      provider: () =>
        new HDWalletProvider(
          "675e38869b873dba6f13087b7c013fa7ea466d8ecef8432b6eea9e675f0ce75a",
          `https://rinkeby.infura.io/v3/d3b981d352c04119ae04100edfae8c0c`
        ),
      network_id: 4, // Ropsten's id
      gas: 5500000, // Ropsten has a lower block limit than mainnet
      gasPrice: 20000000000, // 20 gwei (in wei) (default: 100 gwei)
    },
  },
};
