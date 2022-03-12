import React from "react";
import { useSelector } from "react-redux";
import Card1Item from "./Card1Item";
import Card1Item2 from "./Card1Item2";

const Card1 = () => {
  const account = useSelector((s) => s.account);
  return (
    <div className="card1">
      <Card1Item
        text="From"
        balance={account.balance / 1e18}
        imgName="ic-klay-v2"
      />
      <div className="icon-swap">
        <img src="https://klayswap.com/img/icon/ic-target-swap.svg" />
      </div>
      <Card1Item2
        text="To"
        balance={account.kEthBalance / 1e18}
        imgName="ic-keth"
      />
    </div>
  );
};

export default Card1;
