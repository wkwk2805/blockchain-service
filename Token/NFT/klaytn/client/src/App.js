import React, { useState } from "react";
import Web3 from "web3";
import myNFT from "./contracts/MyNFT.json";
import "./App.css";
const myNFTAddress = "0x672D28589A3661CB9A1fCE0336e6e43CdFe2C2B2";

const App = () => {
  const [NFTList, setNFTList] = useState([]);
  const [web3, setWeb3] = useState();
  const mintNFT = async () => {
    const address = (await web3.eth.getAccounts())[0];
    const myNFTContract = new web3.eth.Contract(myNFT.abi, myNFTAddress);
    myNFTContract.methods.awardItem(address, "ipfs://").send({ from: address });
  };
  const burnNFT = () => {
    console.log("burnNFT");
  };
  const connectWallet = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      setWeb3(web3);
    } else {
      alert("메타마스크 지갑을 설치해 주세요!!");
    }
  };
  const getItems = async () => {
    const address = (await web3.eth.getAccounts())[0];
    const myNFTContract = new web3.eth.Contract(myNFT.abi, myNFTAddress);
    myNFTContract.methods.getItems(address).call().then(console.log);
  };
  return (
    <div>
      <div style={{ fontSize: "5em" }}>NFT</div>
      {web3 ? <></> : <button onClick={connectWallet}>지갑 연결하기</button>}
      <button onClick={mintNFT}>NFT 만들기</button>
      <button onClick={burnNFT}>NFT 지우기</button>
      <button onClick={getItems}>아이템 가져오기</button>
    </div>
  );
};

export default App;
