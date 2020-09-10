var ERC20 = artifacts.require("erc20");

module.exports = function (deployer) {
  const name = "FirstToken";
  const symbol = "FT";
  const decimals = 18;
  const totalSupply = 1000000000;
  deployer.deploy(ERC20, name, symbol, decimals, totalSupply);
};
