import React from "react";
import { useSelector } from "react-redux";
import factoryABI from "../../abi/factoryABI";

const factoryAddr = "0xc6a2ad8cc6e4a7e08fc37cc5954be07d499e7654";

const KETH = "0x34d21b1e550d73cee41151c77f3c73359527a396";

const Card2 = () => {
  const account = useSelector((s) => s.account);
  const token = useSelector((s) => s.token);

  const exchange = () => {
    if (!account.address) {
      alert("지갑을 연결해 주세요!");
      return;
    }

    if (account.balance / 1e18 <= token.klay) {
      alert("잔액을 초과했습니다!");
      return;
    }

    const factory = new window.caver.klay.Contract(factoryABI, factoryAddr);
    factory.methods
      .exchangeKlayPos(KETH, 1, [])
      .send({ from: account.address, gas: 1e7, value: token.klay * 1e18 })
      .then((data) => {
        console.log(data);
        alert("스왑성공");
        window.location.reload();
      })
      .catch((e) => {
        console.error(e);
        alert("거래가 승인되지 않았습니다");
      });
  };
  return (
    <div className="card2" onClick={exchange}>
      <div className="submit-msg">
        <span>Swap</span>
      </div>
    </div>
  );
};

export default Card2;
