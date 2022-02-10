var MyNFT = artifacts.require("./MyNFT.sol");

module.exports = function (deployer) {
  deployer.deploy(MyNFT);
};
