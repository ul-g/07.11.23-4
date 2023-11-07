import React from "react";
import headerData from "./headerData";

function Header() {
  return (
    <div>
      <div className="left-section">ghiggh</div>
      <div className="right-section"></div>
      {headerData.map((item, index) => (
        <button key={index} href={item.link}>
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default Header;
