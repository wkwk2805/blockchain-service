import React from "react";

const Card1Item = ({ text, value, imgName }) => {
  return (
    <div>
      <article class="title">{text}</article>
      <article className="first-line">
        <input
          type="number"
          inputMode="decimal"
          placeholder="0"
          className="input-number"
          step="any"
        />
        <div class="ic-handle-drp"></div>
        <div class="ic-token-symbol">
          <img src={`https://s.klayswap.com/img/token/${imgName}.svg`} />
        </div>
      </article>
      <article className="second-line">
        <div>
          보유 <span>{value}</span>
        </div>
        <div>KLAY</div>
      </article>
    </div>
  );
};

export default Card1Item;
