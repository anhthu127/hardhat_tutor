
// dùng module ignition mới của hardhat
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const TokenModule = buildModule("TokenModule", (m) => {
  const token = m.contract("Token");

  return { token };
});

module.exports = TokenModule;


// // cách truyền thống
// async function main() {
//   const HelloBSC = await ethers.getContractFactory("HelloBSC");
//   const contract = await HelloBSC.deploy();

//   await contract.deployed();

//   console.log(`Deployed to: ${contract.address}`);
// }

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
