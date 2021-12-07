import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className="menu">
      <Link to="/">
        <div className="title">My Swap</div>
      </Link>
      <MenuItem href="/" name="Swap" />
      <MenuItem href="/pool" name="Pool" />
      <MenuItem href="/staking" name="Staking" />
      <MenuItem href="/drops" name="Drops" />
      <MenuItem href="/mypage" name="My Page" />
    </div>
  );
};

export default Menu;
