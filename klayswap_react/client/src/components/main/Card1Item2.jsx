import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import exchangeABI from "../../abi/exchangeABI";
import { changeToken } from "../../store/token";

const LP_KLAY_KETH = "0x27f80731dddb90c51cd934e9bd54bff2d4e99e8a";
const KETH = "0x34d21b1e550d73cee41151c77f3c73359527a396";

const KLAY_DAI_LP = "0xa3987cf6c14f1992e8b4a9e23192eb79dc2969b8";
const KDAI = "0x5c74070fdea071359b86082bd9f9b3deaafbe32b";

const Card1Item2 = ({ text, balance, imgName }) => {
  const dispatch = useDispatch();
  const token = useSelector((s) => s.token);
  const [data, setData] = useState();

  useEffect(() => {
    setData(token.eth);
  }, [token]);

  const changeEth = async (ethAmount) => {
    if (!window.caver) return;
    const contract = new window.caver.klay.Contract(exchangeABI, LP_KLAY_KETH);
    const pool = await contract.methods.getCurrentPool().call();
    dispatch(changeToken(ethAmount * (pool[0] / pool[1]), ethAmount));
  };

  const onChange = (e) => {
    setData(e.target.value);
    changeEth(e.target.value);
  };

  return (
    <div>
      <article className="title">{text}</article>
      <article className="first-line">
        <input
          type="number"
          inputMode="decimal"
          placeholder="0"
          className="input-number"
          step="any"
          onChange={onChange}
          value={data}
        />
        <div className="ic-handle-drp"></div>
        <div className="ic-token-symbol">
          <img src={`https://s.klayswap.com/img/token/${imgName}.svg`} />
        </div>
      </article>
      <article className="second-line">
        <div>
          보유 <span>{balance}</span>
        </div>
        <div>KLAY</div>
      </article>
    </div>
  );
};

export default Card1Item2;
