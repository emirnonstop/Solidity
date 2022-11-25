const hre = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const Voting = await hre.ethers.getContractFactory("VotingContract");
    const voting = await Voting.deploy();
    await voting.deployed();

    console.log(
        `Voting deployed to ${voting.address}`
     );
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});