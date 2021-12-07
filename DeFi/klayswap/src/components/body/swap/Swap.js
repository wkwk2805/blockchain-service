import React from "react";
import "./Swap.css";

const Swap = () => {
  return (
    <div className="swap-container">
      <div className="swap-title">
        원하는 자산으로 바로 <span>교환(스왑)</span> 하세요
      </div>
      <div className="swap-ticket">
        <div className="left">
          <div className="from">
            <div className="text">
              <div>From</div>
              <div>0</div>
              <div>보유 0</div>
            </div>
            <div>
              <div className="icon"></div>
              <div className="icon-text">token</div>
            </div>
          </div>
          <div className="to">
            <div className="text">
              <div>To</div>
              <div>0</div>
              <div>보유 0</div>
            </div>
            <div>
              <div className="icon"></div>
              <div className="icon-text">token</div>
            </div>
          </div>
        </div>
        <div className="right">swap</div>
      </div>
    </div>
  );
};

export default Swap;
