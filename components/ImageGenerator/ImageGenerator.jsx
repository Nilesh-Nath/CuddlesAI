import React, { useEffect, useState } from "react";
import Style from "./ImageGenerator.module.css";
import { Api } from "../index";
import Image from "next/image";
import images from "../../public";
import uploadToPinata from "../../utils/uploadToPinata";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { cuddlesAIContractAddress } from "../../constants/constants";
import { cuddlesAIContractABI } from "../../constants/constants";
import { toast } from "react-toastify";

const ImageGenerationForm = () => {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [blob, setBlob] = useState(null);
  const [pinataURl, setPinataURL] = useState(null);
  const [name, setName] = useState(null);
  const [traits, setTraits] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const [metaData, setMetaData] = useState({
    name: null,
    description: null,
    traits: null,
    price: null,
    image: null,
  });
  const [metaDataURL, setMetadataURL] = useState(null);
  const [mintSuccess, setMintSuccess] = useState(false);
  const [mintSuccessLoading, setMintSuccessLoading] = useState(false);

  useEffect(() => {
    // Update metaData object when any of the attributes change
    if (
      name !== null &&
      description !== null &&
      traits !== null &&
      price !== null &&
      pinataURl !== null
    ) {
      setMetaData({
        name: name,
        description: description,
        traits: traits,
        price: price,
        image: `https://ipfs.io/ipfs/${pinataURl.replace("ipfs://", "")}`,
      });
    }
  }, [name, description, traits, price, pinataURl]);

  useEffect(() => {
    if (
      metaData.name !== null &&
      metaData.description !== null &&
      metaData.traits !== null &&
      metaData.price !== null &&
      metaData.image
    ) {
      handleMetaData();
    }
  }, [metaData]);

  async function handleMetaData() {
    // Upload the metadata JSON to Pinata
    const metadataFileURL = await uploadToPinata(
      new Blob([JSON.stringify(metaData)], { type: "application/json" })
    );
    setMetadataURL(metadataFileURL);
    console.log("Uploaded metadata to Pinata!");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const input = document.getElementById("description").value;
      const nameInp = document.getElementById("name").value;
      const traitsInp = document.getElementById("traits").value;
      const priceInp = document.getElementById("price").value;
      setName(nameInp);
      setTraits(traitsInp);
      setDescription(input);
      setPrice(priceInp);

      const response = await fetch(
        "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Api}`,
          },
          body: JSON.stringify({ inputs: input }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to generate image");
      }

      const blob = await response.blob();
      setBlob(blob);
      setOutput(URL.createObjectURL(blob));
      setLoading(false);
    } catch (e) {
      toast.error(`${e}.Please refresh and try again!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const handleDownload = () => {
    if (output) {
      setDownloadUrl(output);
    }
  };

  const handleRefresh = async () => {
    setLoading(true);
    setOutput(null); // Clear the previous output

    // Add a random parameter to the input
    const input = document.getElementById("description").value + Math.random();
    const response = await fetch(
      "https://api-inference.huggingface.co/models/prompthero/openjourney",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Api}`,
        },
        body: JSON.stringify({ inputs: input }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to generate image");
    }

    const blob = await response.blob();
    setBlob(blob);
    setOutput(URL.createObjectURL(blob));
    setLoading(false);
  };

  const handleMint = async () => {
    console.log("Minting....");
    const fileURL = await uploadToPinata(blob);
    setPinataURL(fileURL);
    console.log("Uploaded to Pinata!");
  };

  // Connecting with Contract

  const connectingWIthContract = async () => {
    try {
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.BrowserProvider(connection);
      const signer = await provider.getSigner();
      const contract = fetchCuddlesAI(signer);
      return contract;
    } catch (e) {
      console.error(e);
    }
  };

  const fetchCuddlesAI = (signerOrProvider) =>
    new ethers.Contract(
      cuddlesAIContractAddress,
      cuddlesAIContractABI,
      signerOrProvider
    );

  useEffect(() => {
    if (metaDataURL !== null) {
      mintNFT();
    }
  }, [metaDataURL]);

  const mintNFT = async () => {
    console.log(metaDataURL);
    // Now uploading the NFT's metadata to Contract (Minting In Blockchain)....
    const cuddlesAI = await connectingWIthContract();

    console.log("Minting....Interacting with Contract....");
    try {
      setMintSuccessLoading(true);
      await cuddlesAI.safeMint(metaDataURL);
      setMintSuccessLoading(false);
      setMintSuccess(true);
    } catch (e) {
      console.error(e);
      toast.error("Error!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    if (mintSuccessLoading === true) {
      toast.info("Minting....", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }, [mintSuccessLoading]);

  useEffect(() => {
    if (mintSuccess === true) {
      toast.success("🦄 NFT Minted! Go and Check !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }, [mintSuccess]);

  return (
    <div className={Style.container}>
      <div className={Style.container_left}>
        <form className={Style.gen_form}>
          <input
            className={Style.inp}
            type="text"
            id="name"
            name="input"
            placeholder="Enter Name of NFT to be generated..."
          />
          <input
            className={Style.inp}
            type="text"
            id="description"
            name="input"
            placeholder="Enter Description of NFT to be generated..."
          />
          <input
            className={Style.inp}
            type="text"
            id="traits"
            name="input"
            placeholder="Enter specialty/traits of NFT to be generated..."
          />
          <input
            className={Style.inp}
            type="number"
            id="price"
            name="input"
            placeholder="Enter price of NFT to be generated..."
          />
        </form>
        <div className={Style.buttons}>
          <button type="submit" onClick={handleSubmit}>
            Generate
          </button>
          <button type="submit" onClick={handleRefresh}>
            Refresh
          </button>
          <button type="submit" onClick={handleMint}>
            Mint
          </button>
        </div>
      </div>

      <div className={Style.Output_Field}>
        {loading && (
          <div className="loading">
            Loading
            <Image
              src={images.loading || <>....</>}
              alt="img"
              width={16}
              height={4}
            />
          </div>
        )}
        {!loading && output && (
          <div className="result-image">
            <a
              href={downloadUrl || output}
              download="generated_nft.png"
              onMouseOver={() => setDownloadUrl(output)}
              onMouseOut={() => setDownloadUrl(null)}
            >
              <img src={output} alt="art" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGenerationForm;
