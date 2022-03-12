import React from "react";
import "./Nav.css";
import { useDispatch, useSelector } from "react-redux";
import { setAccount } from "../store/account";
import tokenABI from "../abi/tokenABI";
const KETH = "0x34d21b1e550d73cee41151c77f3c73359527a396";

const Nav = () => {
  const dispatch = useDispatch();
  const account = useSelector((s) => s.account);
  const startKlayswap = async () => {
    if (window.klaytn) {
      const addrs = await window.klaytn.enable();
      const balance = await window.caver.klay.getBalance(addrs[0]);
      const contract = new window.caver.klay.Contract(tokenABI, KETH);
      const kEthBalance = await contract.methods.balanceOf(addrs[0]).call();
      dispatch(
        setAccount({
          address: addrs[0],
          balance: balance,
          kEthBalance: kEthBalance,
        })
      );
    } else {
      alert("카이카스 지갑을 설치해주세요");
    }
  };
  return (
    <nav className="main-nav">
      <section className="logo-title">
        <span>
          <img src="https://klayswap.com/img/logo/logo.svg" alt="main logo" />
        </span>
        <span className="label">KLAYswap</span>
      </section>
      <section className="menu-list">
        <span>내 자산</span>
        <span>스왑</span>
        <span>
          <span> 예치 </span>
          <span>
            <img
              src="https://klayswap.com/img/icon/ic-triangle-bottom-gray.svg"
              alt="tab"
            />
          </span>
        </span>
        <span>
          <span> KSP 거버넌스 </span>
          <span>
            <img
              src="https://klayswap.com/img/icon/ic-triangle-bottom-gray.svg"
              alt="tab"
            />
          </span>
        </span>
        <span>Drops</span>
        <span>대시보드</span>
      </section>
      <section className="start-button">
        {account.address === "" ? (
          <button onClick={startKlayswap}>클레이스왑 시작하기</button>
        ) : (
          <div>연결된 계좌 : {account.address.substring(0, 8)}...</div>
        )}
      </section>
    </nav>
  );
};

export default Nav;
