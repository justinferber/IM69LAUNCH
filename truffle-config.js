require('dotenv').config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const SECRET = process.env.SECRET;

const private_keys = [
  process.env.PRIVATE_KEY0,
];

module.exports = {
  networks: {
    development: {
      // host: "127.0.0.1",
      // port: 8545,
      // network_id: "*",
    },
    // goerli: {
    //   provider: () => new HDWalletProvider({
    //     privateKeys: private_keys,
    //     providerOrUrl: process.env.INFURA_GOERLI_ENDPOINT,
    //     numberOfAddresses: 1,
    //   }),
    //   network_id: 5,
    //   gasPrice: 60000000000, // 60 Gwei or higher than current base fee
    //   confirmations: 2,
    //   timeoutBlocks: 200,
    //   skipDryRun: true,
    //   gas: 10000000, // adjust this value based on your contract's complexity
    // },

    mainnet: {
      provider: () => new HDWalletProvider({
        privateKeys: private_keys,
        providerOrUrl: process.env.INFURA_ENDPOINT,
        numberOfAddresses: 1,
      }),
      network_id: 1, // Add the network ID for Ethereum mainnet
      gasPrice: 50000000000, // 40 Gwei or higher than the current base fee
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      gas: 20000000, // adjust this value based on your contract's complexity
    },
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.8.17",
      settings: {
        optimizer: {
          enabled: true,
          runs: 210,
        },
      },
    },
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY
  },
};
