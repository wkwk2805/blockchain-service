import React from "react";
import "./Nav.css";
import { useDispatch, useSelector } from "react-redux";
import { setAccount } from "../store/account";

const Nav = () => {
  const dispatch = useDispatch();
  const account = useSelector((s) => s.account);
  const startKlayswap = async () => {
    if (window.klaytn) {
      const addrs = await window.klaytn.enable();
      const balance = await window.caver.klay.getBalance(addrs[0]);
      dispatch(setAccount({ address: addrs[0], balance: balance }));
    } else {
      alert("카이카스 지갑을 설치해주세요");
    }
  };
  return (
    <nav class="main-nav">
      <section class="logo-title">
        <span>
          <img src="https://klayswap.com/img/logo/logo.svg" alt="main logo" />
        </span>
        <span class="label">KLAYswap</span>
      </section>
      <section class="menu-list">
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
      <section class="start-button">
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
