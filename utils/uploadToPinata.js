import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

async function uploadToPinata(blob) {
  // Upload the blob to PINATA
  try {
    const formData = new FormData();
    formData.append("file", blob);
    const resFile = await axios({
      method: "post",
      url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
      data: formData,
      headers: {
        pinata_api_key: `ad74e07fb692218fa8ca`,
        pinata_secret_api_key: `02f02b50d8560661df6c30cd130bf7249c8c26cd53f29e4582349453c0050afc`,
        "Content-Type": "multipart/form-data",
      },
    });
    const fileURL = `ipfs://${resFile.data.IpfsHash}`;
    return fileURL;
  } catch (e) {
    console.error(e);
    toast.error(`${e}`, {
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
}

export default uploadToPinata;
