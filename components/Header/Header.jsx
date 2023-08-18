import React, { useEffect, useState } from "react";
import Image from "next/image";
import images from "../../public";
import Style from "./Header.module.css";
import { toast } from "react-toastify";

const Header = () => {
  const [account, setAccount] = useState(null);

  const checkIfWalletIsConnected = async () => {
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    if (accounts.length > 0) {
      const firstAccount = accounts[0];
      setAccount(firstAccount);
      return firstAccount;
    } else {
      return null;
    }
  };

  const connectWallet = async () => {
    try {
      if (!window.ethereum) return console.error("Install Metamask!");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const firstAccount = accounts[0];
      setAccount(firstAccount);
      return firstAccount;
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const loadConnectedAccount = async () => {
      const connectedAccount = await checkIfWalletIsConnected();
      if (connectedAccount) {
        setAccount(connectedAccount);
      }
    };

    loadConnectedAccount();
  }, []);

  return (
    <div className={Style.Header}>
      <div className={Style.Header_box}>
        <div className={Style.Header_box_left}>
          <div className={Style.Header_box_left_image}>
            <Image src={images.WebLogo1} alt="img" width={100} height={100} />
          </div>
          <div className={Style.Header_box_left_name}>
            <a href="./">
              Cuddles<span>AI</span>
            </a>
          </div>
        </div>
        <div className={Style.Header_box_right}>
          <div className={Style.Header_box_right_connectBtn}>
            {account ? (
              <button id="btn" onClick={connectWallet}>
                {account.slice(0, 6)}....
              </button>
            ) : (
              <button id="btn" onClick={connectWallet}>
                Connect
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
