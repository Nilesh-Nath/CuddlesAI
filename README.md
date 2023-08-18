# CuddlesAI

CuddlesAI is an AI tool that enables users to generate NFTs based on provided descriptions. Users can also choose to mint the generated NFTs or refresh to get new ones. The project utilizes the Hugging Face API for AI-generated images, stores NFTs on IPFS using Pinata as the pinning service, and mints NFTs as ERC721 tokens via a smart contract. The minted NFTs can be viewed on OpenSea's Sepolia testnet. Please note that while generating NFTs doesn't require an account connection, minting NFTs requires a Metamask connection to your account.

## Features

- Generate AI-based NFTs from user-provided descriptions.
- Mint generated NFTs as ERC721 tokens on the Sepolia testnet.
- Refresh functionality to obtain new NFT options.
- Download generated NFTs by clicking on them.
- Frontend developed using Next.js.
- Backend smart contract developed in Solidity using the Hardhat framework.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Nilesh-Nath/CuddlesAI.git
```

2. Navigate to the project directory:

cd CuddlesAI

3. Install dependencies:

yarn install

## Usage

1. Start the development server:

yarn run dev

2. Open the provided URL in your web browser to access the CuddlesAI application.

3. Generate NFTs:

   - Enter a description to generate an AI-based NFT.
   - Optionally, refresh for new NFT options.

4. Mint NFTs (requires Metamask connection):

   - Connect your Metamask account to the app.
   - Choose an NFT you'd like to mint.
   - Follow the on-screen instructions to complete the minting process.

5. View and download minted NFTs:
   - Click on a minted NFT to view it in detail.
   - Download the NFT image using the provided download option.
