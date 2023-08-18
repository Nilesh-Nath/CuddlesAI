const { network } = require("hardhat");
const { name, symbol } = require("../helper.config");
const { verify } = require("../utils/verify");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deployer } = await getNamedAccounts();
  const { log, deploy } = deployments;
  const chainId = network.config.chainId;
  const arguments = [name, symbol];

  log("Deploying CuddlesAIMinter....");
  const CuddlesAI = await deploy("CuddlesAI", {
    from: deployer,
    log: true,
    args: arguments,
    waitConfirmations: network.config.blockConfirmations || 1,
  });
  log("CuddlesAIMinter Deployed !!!!");

  if (chainId !== 31337 && process.env.ETHERSCAN_API_KEY) {
    log("Verifying....");
    await verify(CuddlesAI.address, arguments);
  }
};

module.exports.tags = ["nftMinter"];
