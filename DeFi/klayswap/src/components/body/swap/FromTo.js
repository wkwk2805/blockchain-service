import React from "react";

const FromTo = ({ title, data, reserve, tokenName = "token" }) => {
  return (
    <div className="item">
      <div className="text">
        <div>{title}</div>
        <div>{data}</div>
        <div>보유 {reserve}</div>
      </div>
      <div>
        <div className="icon"></div>
        <div className="icon-text">{tokenName}</div>
      </div>
    </div>
  );
};

export default FromTo;
