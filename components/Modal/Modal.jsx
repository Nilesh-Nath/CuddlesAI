import React from "react";
import Style from "./Modal.module.css";
import images from "../../public";
import Image from "next/image";

const Modal = ({ setOpenModal }) => {
  return (
    <div className={Style.Modal}>
      <div className={Style.cross} onClick={() => setOpenModal(false)}>
        <img src="/cross.png" width={20} />
      </div>
      <div className={Style.container}>
        <div className={Style.container_left}>
          <img
            className={Style.container_left_Koala}
            src="./Koala-Teacher-bg.png"
          />
        </div>
        <div className={Style.container_right}>
          <h1 className={Style.header}>"Henlo there!"</h1>
          <p>
            "I`m glad to meet you! My name is Cuddles. I`m an AI Koala developed
            by Koala Nilesh. I have an ability to create NFTs using any details
            you can provide to me ;) Follow the steps to give it a shot!"
          </p>
          <img
            className={Style.image}
            src="./idea.png"
            width={40}
            height={40}
          />
          <ul>
            <li className={Style.list}>
              First enter the desired name of your NFT
            </li>
            <li className={Style.list}>
              Next, tell me whats on your mind! In the description input field,
              enter anything, eg "Cute little Koala" xD and I'll generate an NFT
              based on your description
            </li>
            <li className={Style.list}>
              Enter the speciality / traits of your NFT ,<br /> eg "Cute or
              Dangerous"
            </li>
            <li className={Style.list}>
              Lastly enter the value of your NFT and click Create and then Mint.
              With just that i will generate an NFT and place it on chain! (You
              can refresh and generate new NFT if you don't like NFT)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
