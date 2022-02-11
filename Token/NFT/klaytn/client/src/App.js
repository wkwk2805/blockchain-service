import React, { useState } from "react";
import Web3 from "web3";
import myNFT from "./contracts/MyNFT.json";
import "./App.css";
import { pinFileToIPFS, pinJSONToIPFS, getIPFSData } from "./pinata";

// const myNFTAddress = "0xC1B6e6ED0605D13738572068eb64292B2267E797"; // local contract address
const myNFTAddress = "0x03BF706753594F6cEa8afB8680C06969bDDDBf3C"; // rinkeby contract address

const App = () => {
  const [NFTList, setNFTList] = useState([]);
  const [web3, setWeb3] = useState();
  const [file, setFile] = useState();
  const mintNFT = async (imageURI) => {
    await connectWallet();
    const address = (await web3.eth.getAccounts())[0];
    const myNFTContract = new web3.eth.Contract(myNFT.abi, myNFTAddress);
    await myNFTContract.methods
      .create(address, imageURI)
      .send({ from: address });
  };
  const burnNFT = () => {
    console.log("burnNFT");
  };
  const connectWallet = async () => {
    if (web3) return;
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      setWeb3(web3);
    } else {
      alert("메타마스크 지갑을 설치해 주세요!!");
    }
  };
  const getItems = async () => {
    await connectWallet();
    const address = (await web3.eth.getAccounts())[0];
    const myNFTContract = new web3.eth.Contract(myNFT.abi, myNFTAddress);
    const list = await myNFTContract.methods.getItems(address).call();
    const items = [];
    for (const item of list) {
      const d = await getIPFSData(item);
      items.push(d);
    }
    setNFTList(items);
  };
  const putIPFS = async () => {
    const formData = new FormData();
    formData.append("file", file);
    const fileData = await pinFileToIPFS(formData, "FileName");
    const data = await pinJSONToIPFS({
      description: "description",
      image: "http://ipfs.io/ipfs/" + fileData.IpfsHash,
      name: "JSON Data",
      attributes: [],
    });
    await mintNFT("http://ipfs.io/ipfs/" + data.IpfsHash);
    await getItems();
  };
  const _onChange = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <div>
      <div style={{ fontSize: "5em" }}>NFT</div>
      {web3 ? <></> : <button onClick={connectWallet}>지갑 연결하기</button>}
      <div>
        <button onClick={getItems}>아이템 가져오기</button>
      </div>
      <div>
        <input type="file" onChange={_onChange} />
        <button onClick={putIPFS}>ipfs에 이미지 넣기</button>
      </div>
      <div>
        {NFTList.map((e) => {
          return (
            <div>
              <img width={300} src={e.image} alt="" />
              <div>{e.image}</div>
              <div>
                <button onClick={burnNFT}>삭제</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
