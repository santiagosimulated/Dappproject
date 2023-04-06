require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");

const dotenv = require("dotenv");
dotenv.config();



/** @type import('hardhat/config').HardhatUserConfig */

const API_URL = process.env.API_URL;

const PRIVATE_KEY = process.env.PRIVATE_KEY;


module.exports = {
  defaultNetwork: "goerli",
  networks: {
    hardhat: {
    },
    goerli: {
      url: API_URL,
      accounts:[PRIVATE_KEY] 
    }
  },
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
}