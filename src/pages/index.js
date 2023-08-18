import { ImageGenerationForm } from "../../components/index";

import { Header } from "../../components";

import { Footer } from "../../components";

import { Modal } from "../../components/index";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <Header />
      <ToastContainer />
      <ImageGenerationForm />
      <Footer />
    </>
  );
}
