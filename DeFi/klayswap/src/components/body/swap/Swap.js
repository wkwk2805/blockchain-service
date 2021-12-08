import React from "react";
import FromTo from "./FromTo";
import "./Swap.css";

const Swap = () => {
  const swap = async () => {
    const accounts = await window.klaytn.enable();
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
