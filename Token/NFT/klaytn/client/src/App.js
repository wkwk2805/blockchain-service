import React, { useEffect, useState } from "react";
import Web3 from "web3";
import MyNFTokenABI from "./contracts/MyNFTokenABI";
import ReactLoading from "react-loading";
import "./App.css";

const App = () => {
  const [NFTList, setNFTList] = useState([]);
  const [web3, setWeb3] = useState();
  const mintNFT = async () => {
    const address = (await web3.eth.getAccounts())[0];
    console.log(address);
    const contract = new web3.eth.Contract(
      MyNFTokenABI,
      "0xA670236675E7C3c3d886a645c86C76eDC7EA9Fe7"
    );
    // console.log(contract.events.TOKEN_ID());
    const result = await contract.methods
      .awardItem(address, "ipfs://")
      .send({ from: address });
    const tokenId = result.events.TOKEN_ID.returnValues.tokenId;
    console.log(tokenId);
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
  return (
    <div>
      <div className="loading">
        <ReactLoading color={"black"} type={"spin"} />
      </div>
      <div style={{ fontSize: "5em" }}>NFT</div>
      {web3 ? <></> : <button onClick={connectWallet}>지갑 연결하기</button>}
      <button onClick={mintNFT}>NFT 만들기</button>
      <button onClick={burnNFT}>NFT 지우기</button>
    </div>
  );
};

export default App;
