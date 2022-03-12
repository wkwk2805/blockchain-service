import React from "react";
import "./Main.css";
import Card1 from "./Card1";
import Card2 from "./Card2";

const Main = () => {
  return (
    <main className="main">
      <section>
        <p className="text">
          원하는 자산으로 바로 <span>교환(스왑)</span>하세요
        </p>
      </section>
      <section className="slippage">
        <div>0.5%</div>
        <div>슬리피지</div>
        <div>
          <img
            src="https://klayswap.com/img/icon/ic-setting-gray.svg"
            alt="setting"
          />
        </div>
      </section>
      <section className="exchange-card">
        <div className="blur-bg" />
        <Card1 />
        <Card2 />
      </section>
    </main>
  );
};

export default Main;
