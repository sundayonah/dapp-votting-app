const { ethers } = require("hardhat");

async function main() {
  const Voting = await ethers.getContractFactory("Voting");


  //Start deployment, returning a promise that resolves to a contract onject
  const Voting_ = await Voting.deploy(["Onah", "Mike", "Henry","Jude"], 90);
  console.log("Contract Address", Voting_.address);
}


main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1)
})