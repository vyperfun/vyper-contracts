var ERC721 = artifacts.require("erc721");

module.exports = function (deployer) {
  const name = "FirstToken";
  const symbol = "FT";
  const tokenURI = "TokenURI";
  deployer.deploy(ERC721, name, symbol, tokenURI);
};
