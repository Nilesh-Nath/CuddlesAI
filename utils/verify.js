const { run } = require("hardhat");

async function verify(contractAddress, args) {
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("Already Verified!")) {
      console.log("Already Verified!");
    } else {
      console.error(e);
    }
  }
}

module.exports = {
  verify,
};
