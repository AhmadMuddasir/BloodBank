require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

//0x7924f75E6CE0De55fb3Ad5f9E4f267df4032AA17



const ALCHEMY_URL = process.env.ALCHEMY_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY


module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: ALCHEMY_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};


