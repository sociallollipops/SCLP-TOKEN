const hre = require("hardhat");

async function main() {

  const LollipopsToken = await hre.ethers.getContractFactory("LollipopsToken"); 
  const lollipopsToken = await LollipopsToken.deploy();
  
  await lollipopsToken.waitForDeployment();

  console.log("lollipopsToken with 1 ETH deployed to:", lollipopsToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
