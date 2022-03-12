import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="main-header">
      <section className="first-section">
        <div className="part1">
          <span>HELP</span>
          <span>
            <img
              src="https://klayswap.com/img/icon/ic-chevron-bottom-disable-gray.svg"
              alt="chevron"
            />
          </span>
        </div>
        <div className="part2">
          <p className="circle-icon"></p>
          <span>mainnet</span>
          <span className="sharp">#</span>
          <span>8,321,564</span>
        </div>
        <div className="part3">
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
