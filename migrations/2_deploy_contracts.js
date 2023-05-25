require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const InvasionMars = artifacts.require("InvasionMars");

module.exports = async function (deployer, network, accounts) {
  // Deploy the InvasionMars contract
  await deployer.deploy(InvasionMars);
  const tokenInstance = await InvasionMars.deployed();
  console.log("InvasionMars contract deployed at:", tokenInstance.address);
};