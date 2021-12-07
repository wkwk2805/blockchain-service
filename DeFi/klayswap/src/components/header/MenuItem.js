import React from "react";
import "./MenuItem.css";
import { Link } from "react-router-dom";

const MenuItem = ({ name, href }) => {
  return (
    <Link to={href}>
      <div className="menu-item">{name}</div>
    </Link>
  );
};

export default MenuItem;
