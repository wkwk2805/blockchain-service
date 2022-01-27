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

  const uniswapERC20Address = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
  const uniswapFactoryAddress = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707";
  const uniswapPairAddress = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";

  const ATKAddress = "0x59b670e9fA9D0A427751Af201D676719a970857b";
  const BTKAddress = "0x4ed7c70F96B99c776995fB64377f0d4aB3B0e1C1";
  const CTKAddress = "0x322813Fd9A801c5507c9de605d63CEA4f2CE6c44";

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
    const { getPair, allPairsLength, createPair } =
      uniswapFactoryContract.methods;
    allPairsLength().call((err, s) => {
      console.log(s);
    });
  };

  const createPair = () => {
    const { getPair, allPairsLength, createPair } =
      uniswapFactoryContract.methods;
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
      <div>
        <button onClick={createPair}>createPair</button>
        <button onClick={createPair}>B</button>
        <button onClick={createPair}>C</button>
      </div>
    </div>
  );
};

export default Swap;
