// migrations/2_deploy_contracts.js
const CharityContract = artifacts.require("CharityContract");

module.exports = function (deployer) {
  deployer.deploy(CharityContract);
};
