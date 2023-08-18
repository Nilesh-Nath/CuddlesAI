import React from "react";
import Style from "./Footer.module.css";
import { Modal } from "../index";
import { useState } from "react";

const Footer = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className={Style.footer}>
        <div className={Style.footerContent}>
          <p className={Style.footerContentPara}>
            &copy;2023 CuddlesAI. Made by Koala!
          </p>
        </div>
        <button className={Style.Modal} onClick={() => setOpenModal(true)}>
          How It Works?
        </button>
      </div>
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </>
  );
};

export default Footer;
