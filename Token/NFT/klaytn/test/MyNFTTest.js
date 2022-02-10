const MyNFT = artifacts.require("./MyNFT.sol");

contract("MyNFT", (accounts) => {
  it("URL 배열을 리턴해야한다", async () => {
    const MyNFTInstance = await MyNFT.deployed();

    await MyNFTInstance.awardItem(accounts[0], "ipfs://");
    await MyNFTInstance.awardItem(accounts[0], "ipfs://");
    await MyNFTInstance.awardItem(accounts[0], "ipfs://");
    await MyNFTInstance.awardItem(accounts[0], "ipfs://");

    const storedData = await MyNFTInstance.getItems(accounts[0]);
    console.log(storedData);

    // assert.equal(storedData, 89, "The value 89 was not stored.");
  });
});
