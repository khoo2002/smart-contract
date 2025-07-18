require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

module.exports = {
  solidity: '0.8.20',
  networks: {
    amoy: {
      url: process.env.ANKR_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
