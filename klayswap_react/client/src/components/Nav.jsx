import React from "react";
import "./Nav.css";

const Nav = () => {
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
        <button>클레이스왑 시작하기</button>
      </section>
    </nav>
  );
};

export default Nav;
