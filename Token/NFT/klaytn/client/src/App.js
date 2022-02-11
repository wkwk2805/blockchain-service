import React, { useState } from "react";
import Web3 from "web3";
import myNFT from "./contracts/MyNFT.json";
import "./App.css";
import { pinFileToIPFS, pinJSONToIPFS, getIPFSData } from "./pinata";

// const myNFTAddress = "0x087f153eCd92eB53fDd54bca4c30625350720286"; // local contract address
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
  const burnNFT = async (tokenId) => {
    const address = (await web3.eth.getAccounts())[0];
    const myNFTContract = new web3.eth.Contract(myNFT.abi, myNFTAddress);
    await myNFTContract.methods.burn(tokenId).send({ from: address });
    await getItems();
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
    const itemList = await myNFTContract.methods.getItems(address).call();
    const items = [];
    for (let i = 0; i < itemList.length; i++) {
      const metadata = await getIPFSData(itemList[i].uri);
      items.push({ imageUri: metadata.image, tokenId: itemList[i].tokenId });
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
              <img width={300} src={e.imageUri} alt="" />
              <div>{e.imageUri}</div>
              <div>
                <button onClick={() => burnNFT(e.tokenId)}>삭제</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
