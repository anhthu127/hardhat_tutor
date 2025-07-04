const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const TokenModule = buildModule("contracts", (m) => {
  const token = m.contract("Token");

  return { token };
});

module.exports = TokenModule;
