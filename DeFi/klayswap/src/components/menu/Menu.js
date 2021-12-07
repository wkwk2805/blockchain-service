import React from "react";
import "./Menu.css";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className="menu">
      <div className="title">My Swap</div>
      <MenuItem name="My Page" />
      <MenuItem name="Swap" />
      <MenuItem name="Pool" />
      <MenuItem name="Staking" />
      <MenuItem name="Drops" />
    </div>
  );
};

export default Menu;
