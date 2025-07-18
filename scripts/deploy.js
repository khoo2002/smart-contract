const hre = require("hardhat");

async function main() {
  const Tracker = await hre.ethers.getContractFactory("SocialProgramTracker");
  const tracker = await Tracker.deploy();
  await tracker.waitForDeployment();
  console.log("Contract deployed to:", await tracker.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
