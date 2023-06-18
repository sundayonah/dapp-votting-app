const { ethers } = require("hardhat");

async function main() {
  const Voting = await ethers.getContractFactory("Voting");

  const Voting_ = await Voting.deploy(["Onah", "Mike", "Henry","Jude"])
  console.log("Contract Address", Voting_.address);
}


main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1)
})