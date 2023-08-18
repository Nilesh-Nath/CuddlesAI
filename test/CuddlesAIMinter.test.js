const { assert, expect } = require("chai");
const { network, ethers, deployments } = require("hardhat");

const chainId = network.config.chainId;

chainId == 31337
  ? describe("NFT Minter", () => {
      let nftMinter, deployer;
      let owner;
      beforeEach(async () => {
        accounts = await ethers.getSigners();
        deployer = await accounts[0].getAddress();
        await deployments.fixture(["nftMinter"]);
        nftMinter = await ethers.getContract("CuddlesAI", deployer);
        owner = await nftMinter.owner();
      });

      it("1.It should have the correct initial owner", async function () {
        expect(owner).to.equal(deployer);
      });

      it("2.It should mint a new token with correct tokenURI", async function () {
        const tokenURI = "token_uri_1";
        await nftMinter.safeMint(tokenURI);

        const totalSupply = await nftMinter.totalSupply();
        expect(totalSupply).to.equal(1);

        const retrievedTokenURI = await nftMinter.tokenURI(0);
        expect(retrievedTokenURI).to.equal(tokenURI);
      });

      it("3.It should support the required interfaces", async function () {
        expect(await nftMinter.supportsInterface("0x80ac58cd")).to.equal(true); // ERC721
        expect(await nftMinter.supportsInterface("0x780e9d63")).to.equal(true); // ERC721Enumerable
        expect(await nftMinter.supportsInterface("0x5b5e139f")).to.equal(true); // ERC721URIStorage
      });
    })
  : describe.skip;
