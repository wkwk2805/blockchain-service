import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header class="main-header">
      <section class="first-section">
        <div class="part1">
          <span>HELP</span>
          <span>
            <img
              src="https://klayswap.com/img/icon/ic-chevron-bottom-disable-gray.svg"
              alt="chevron"
            />
          </span>
        </div>
        <div class="part2">
          <p class="circle-icon"></p>
          <span>mainnet</span>
          <span class="sharp">#</span>
          <span>8,321,564</span>
        </div>
        <div class="part3">
          <span>KO</span>
          <span>
            <img
              src="https://klayswap.com/img/icon/ic-chevron-bottom-disable-gray.svg"
              alt="chevron"
            />
          </span>
        </div>
      </section>
    </header>
  );
};

export default Header;
