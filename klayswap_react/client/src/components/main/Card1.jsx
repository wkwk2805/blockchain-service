import React from "react";
import Card1Item from "./Card1Item";

const Card1 = () => {
  return (
    <div className="card1">
      <Card1Item text="From" value="100" />
      <div class="icon-swap">
        <img src="https://klayswap.com/img/icon/ic-target-swap.svg" />
      </div>
      <Card1Item text="To" value="0" />
    </div>
  );
};

export default Card1;
