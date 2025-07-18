const { ethers } = require("ethers");
const fs = require("fs");
require("dotenv").config();

// Contract ABI and bytecode
const contractABI = require("../abi.json");

// Read the compiled contract
const contractPath = "./artifacts/contracts/smart-contract.sol/SocialProgramTracker.json";
let contractData;

try {
  contractData = JSON.parse(fs.readFileSync(contractPath, "utf8"));
} catch (error) {
  console.error("Error reading contract artifacts. Make sure to compile first with: npx hardhat compile");
  process.exit(1);
}

async function main() {
  // Setup provider and wallet
  const provider = new ethers.JsonRpcProvider(process.env.ANKR_URL);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  console.log("Deploying contract with account:", wallet.address);
  
  // Check balance
  const balance = await provider.getBalance(wallet.address);
  console.log("Account balance:", ethers.formatEther(balance), "ETH");

  // Create contract factory
  const contractFactory = new ethers.ContractFactory(
    contractData.abi,
    contractData.bytecode,
    wallet
  );

  // Deploy the contract
  console.log("Deploying contract...");
  const contract = await contractFactory.deploy();
  await contract.waitForDeployment();

  const contractAddress = await contract.getAddress();
  console.log("Contract deployed to:", contractAddress);
  
  // Save the contract address to a file
  const deploymentInfo = {
    address: contractAddress,
    network: "sepolia",
    deployer: wallet.address,
    timestamp: new Date().toISOString()
  };
  
  fs.writeFileSync("deployment.json", JSON.stringify(deploymentInfo, null, 2));
  console.log("Deployment info saved to deployment.json");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
