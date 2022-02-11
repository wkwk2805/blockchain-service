const MyNFT = artifacts.require("./MyNFT.sol");

contract("MyNFT", (accounts) => {
  it("URL 배열을 리턴해야한다", async () => {
    const MyNFTInstance = await MyNFT.deployed();

    await MyNFTInstance.create(accounts[0], "ipfs://1");
    await MyNFTInstance.create(accounts[0], "ipfs://2");
    await MyNFTInstance.create(accounts[0], "ipfs://3");
    await MyNFTInstance.create(accounts[0], "ipfs://4");

    const storedData = await MyNFTInstance.getItems(accounts[0]);
    console.log(storedData);
  });
});
