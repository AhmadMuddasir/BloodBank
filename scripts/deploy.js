//0x2c3B42CF7A956BdDbFf58B34E150F2760e7f42D6

async function main() {
  const BloodBank = await hre.ethers.getContractFactory("BloodBank"); //fetching bytecode and ABI
  const bloodBank = await Chai.deploy(); //creating an instance of our smart contract

  //deploying your smart contract

  console.log("Deployed contract address:",`${await bloodBank.getAddress()}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});