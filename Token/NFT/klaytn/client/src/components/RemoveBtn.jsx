import React from "react";
import Button from "@mui/material/Button";
import myNFT from "../contracts/MyNFT.json";

const myNFTAddress = "0x14224540139b64Bbb6D84fCC4041B0b6083c7ee1"; // rinkeby contract address

const RemoveBtn = ({ web3, tokenId, getItems }) => {
  const burnNFT = async () => {
    const address = (await web3.eth.getAccounts())[0];
    const myNFTContract = new web3.eth.Contract(myNFT.abi, myNFTAddress);
    await myNFTContract.methods.burn(tokenId).send({ from: address });
  };
  return (
    <Button variant="contained" onClick={burnNFT}>
      Remove Button
    </Button>
  );
};

export default RemoveBtn;
