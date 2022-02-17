import React from "react";
import Button from "@mui/material/Button";
import myNFT from "../contracts/MyNFT.json";
import { show } from "../store/loading";
import { useDispatch } from "react-redux";

const myNFTAddress = "0x14224540139b64Bbb6D84fCC4041B0b6083c7ee1"; // rinkeby contract address

const RemoveBtn = ({ web3, tokenId }) => {
  const dispatch = useDispatch();
  const burnNFT = async () => {
    if (!window.confirm("정말로 삭제하시겠습니까?")) return;
    try {
      dispatch(show());
      const address = (await web3.eth.getAccounts())[0];
      const myNFTContract = new web3.eth.Contract(myNFT.abi, myNFTAddress);
      await myNFTContract.methods.burn(tokenId).send({ from: address });
    } catch (error) {
      console.error(error);
    } finally {
      window.location.reload();
    }
  };
  return (
    <Button variant="contained" onClick={burnNFT} color={"error"}>
      제거
    </Button>
  );
};

export default RemoveBtn;
