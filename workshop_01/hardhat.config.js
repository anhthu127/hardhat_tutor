/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    bnbTestnet: {
      url: "https://bsc-testnet-dataseed.bnbchain.org",
      chainId: 97,
      accounts: [process.env.PRIVATE_KEY]  
    }
  },
  // “The Etherscan V1 API is no longer supported… we strongly recommend migrating to the Etherscan V2 API (Multichain API)”

// => need to verify contract directly in the site https://testnet.bscscan.com/verifyContract
  etherscan: {
    apiKey: {
      bscTestnet: process.env.API_KEY
    }
  }

};