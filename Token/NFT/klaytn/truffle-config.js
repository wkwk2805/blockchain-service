const path = require("path");
const privatekey = `675e38869b873dba6f13087b7c013fa7ea466d8ecef8432b6eea9e675f0ce75a`;
const HDWalletProvider = require("./client/node_modules/@truffle/hdwallet-provider");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      host: "localhost",
      port: 8545,
      network_id: "*",
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          privatekey,
          "https://rinkeby.infura.io/v3/d3b981d352c04119ae04100edfae8c0c"
        ),
      network_id: "*", 
      gas: 5500000, 
      confirmations: 2, // 배포간격을 위해 존재하는 블록간격
      timeoutBlocks: 200, // 채굴전까지 기다려주는 시간 (기본:50s)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },
  },
  compilers: {
    solc: {
      version: "^0.8.0",
    },
  },
};
