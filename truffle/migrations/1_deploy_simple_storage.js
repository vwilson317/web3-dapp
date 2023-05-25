const SimpleStorage = artifacts.require("SimpleStorage");
const VWTestTokenContract = artifacts.require("VWTestTokenContract");

module.exports = function (deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(VWTestTokenContract);
};
