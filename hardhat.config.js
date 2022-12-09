require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: "https://soft-smart-darkness.matic-testnet.discover.quiknode.pro/e501cbade6bb08f19aacb5d8a76beb52733ac4b0/",
      accounts: ["7b5061106bf6c2b8e33c6d33089363d092c2eb8fb40b384688814befaffdfb90"],
    }
  }
};
