const Migrations = artifacts.require("Migrations");
const DaiTokenMock = artifacts.require("DaiTokenMock");

module.exports = async function(deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(DaiTokenMock);
  const tokenMock = await DaiTokenMock.deployed()
  // Mint 1,000 Dai Tokens for the deployer
  await tokenMock.mint(
    '0x3ad1869BeDf3f51393B212471f669078942406f7',
    '1000000000000000000000'
  )
};
