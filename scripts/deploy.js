const hre = require("hardhat");
async function main() {
  const Chai = await hre.ethers.getContractFactory("chai"); //fetching bytecode and ABI
  const chai = await Chai.deploy(); //creating an instance of our smart contract


   //await chai.deployed();//deploying your smart contract
   const token = await ethers.deployContract("chai");
   console.log("Deployed Contract Address:", await token.getAddress());


     //console.log("Deployed contract address:",`${chai.address}`);
}
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//0x3c2A1483F63A322FA65FBBf60372ad2D59985812
