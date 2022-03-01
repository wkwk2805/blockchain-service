import React from "react";

const Card1Item = ({ text, value, own }) => {
  return (
    <div>
      <article class="title">From</article>
      <article>
        <input type="text" value="0" />
        <div class="ic-handle-drp"></div>
        <div class="ic-token-symbol">
          <img src="https://s.klayswap.com/img/token/ic-klay-v2.svg" />
        </div>
      </article>
      <article>
        <div>
          보유 <span>0</span>
        </div>
        <div>KLAY</div>
      </article>
    </div>
  );
};

export default Card1Item;
