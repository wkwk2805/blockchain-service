const hre = require("hardhat");

async function main() {
  const solidities = ["UniswapV2ERC20", "UniswapV2Pair"];
  for (const solidity of solidities) {
    const sol = await hre.ethers.getContractFactory(solidity);
    const s = await sol.deploy();
    await s.deployed();
    console.log(solidity + " deployed to:", s.address);
  }

  const sol = await hre.ethers.getContractFactory("UniswapV2Factory");
  const s = await sol.deploy("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
  await s.deployed();
  console.log("UniswapV2Factory deployed to:", s.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
