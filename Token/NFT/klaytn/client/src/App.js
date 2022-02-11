import React, { useState } from "react";
import Web3 from "web3";
import myNFT from "./contracts/MyNFT.json";
import "./App.css";

import { pinFileToIPFS } from "./pinFileToIPFS";

const myNFTAddress = "0xC542F7C095173569bC0a22426342794C31476273";

const App = () => {
  const [NFTList, setNFTList] = useState([]);
  const [web3, setWeb3] = useState();
  const [file, setFile] = useState();
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
    const list = await myNFTContract.methods.getItems(address).call();
    setNFTList(list);
  };
  const putIPFS = async () => {
    const formData = new FormData();
    formData.append("file", file);
    pinFileToIPFS(
      "55a704003bad07615460",
      "1707ed247b8c764c1ab68b3a5ffac84aec9f0843e28969217b627327bc0a0072",
      formData
    );
  };
  const _onChange = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <div>
      <div style={{ fontSize: "5em" }}>NFT</div>
      {web3 ? <></> : <button onClick={connectWallet}>지갑 연결하기</button>}
      <button onClick={mintNFT}>NFT 만들기</button>
      <button onClick={burnNFT}>NFT 지우기</button>
      <button onClick={getItems}>아이템 가져오기</button>
      <input type="file" onChange={_onChange} />
      <button onClick={putIPFS}>ipfs에 이미지 넣기</button>
    </div>
  );
};

export default App;
