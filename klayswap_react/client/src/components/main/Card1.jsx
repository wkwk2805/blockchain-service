import React from "react";
import { useSelector } from "react-redux";
import Card1Item from "./Card1Item";
import {} from "bn.js";

const Card1 = () => {
  const account = useSelector((s) => s.account);
  return (
    <div className="card1">
      <Card1Item
        text="From"
        value={account.balance / 1e18}
        imgName="ic-klay-v2"
      />
      <div class="icon-swap">
        <img src="https://klayswap.com/img/icon/ic-target-swap.svg" />
      </div>
      <Card1Item text="To" value="0" imgName="ic-kusdt" />
    </div>
  );
};

export default Card1;
