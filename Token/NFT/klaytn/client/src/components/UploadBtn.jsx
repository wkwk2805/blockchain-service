import React, { useState } from "react";
import Button from "@mui/material/Button";
import { pinFileToIPFS, pinJSONToIPFS } from "../utils/pinata";
import myNFT from "../contracts/MyNFT.json";
import { useDispatch } from "react-redux";
import { show, hide } from "../store/loading";

// const myNFTAddress = "0x087f153eCd92eB53fDd54bca4c30625350720286"; // local contract address
const myNFTAddress = "0x14224540139b64Bbb6D84fCC4041B0b6083c7ee1"; // rinkeby contract address

const UploadBtn = ({ web3, getItems }) => {
  const dispatch = useDispatch();
  const [file, setFile] = useState();
  const mintNFT = async (imageURI) => {
    const contract = new web3.eth.Contract(myNFT.abi, myNFTAddress);
    const address = (await web3.eth.getAccounts())[0];
    await contract.methods.create(address, imageURI).send({ from: address });
  };
  const putIPFS = async () => {
    if (!file) {
      alert("파일을 선택해주세요!");
      return;
    }
    try {
      dispatch(show());
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
    } catch (error) {
      console.error(error);
    } finally {
      window.location.reload();
    }
  };
  const _onChange = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <div>
      <input type="file" onChange={_onChange} />
      <Button variant="contained" onClick={putIPFS}>
        Upload Button
      </Button>
    </div>
  );
};

export default UploadBtn;
