import React, { useState, useEffect } from "react";
import FromTo from "./FromTo";
import "./Swap.css";
import Web3 from "web3";
import uniswapERC20ABI from "../../../ABI/uniswapERC20";
import uniswapFactoryABI from "../../../ABI/uniswapFactory";
import uniswapPairABI from "../../../ABI/uniswapPair";

const Swap = () => {
  const [account, setAccount] = useState("");

  const [uniswapERC20Contract, setUniswapERC20Contract] = useState(null);
  const [uniswapFactoryContract, setUniswapFactoryContract] = useState(null);
  const [uniswapPairContract, setUniswapPairContract] = useState(null);

  const uniswapERC20Address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const uniswapFactoryAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
  const uniswapPairAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

  useEffect(() => {
    const { ethereum } = window;
    if (ethereum) {
      ethereum.enable().then((accounts) => {
        setAccount(accounts[0]);
        const web3 = new Web3(ethereum);
        setUniswapERC20Contract(
          new web3.eth.Contract(uniswapERC20ABI, uniswapERC20Address)
        );
        setUniswapFactoryContract(
          new web3.eth.Contract(uniswapFactoryABI, uniswapFactoryAddress)
        );
        setUniswapPairContract(
          new web3.eth.Contract(uniswapPairABI, uniswapPairAddress)
        );
      });
    }
  }, []);

  const swap = async () => {
    const { mint } = uniswapERC20Contract.methods;
    console.log(mint);
  };

  return (
    <div className="swap-container">
      <div className="swap-title">
        원하는 자산으로 바로 <span>교환(스왑)</span> 하세요
      </div>
      <div className="swap-ticket">
        <div className="left">
          <FromTo title="From" data="0" reserve="0" />
          <FromTo title="To" data="0" reserve="0" />
        </div>
        <div className="right" onClick={swap}>
          swap
        </div>
      </div>
    </div>
  );
};

export default Swap;
