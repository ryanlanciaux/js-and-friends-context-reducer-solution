import React from "react";
import HeaderCart from "./HeaderCart";

function Header({ onToggleCart, showingCart }) {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
      }}
    >
      <h1>Awesome Coffee</h1>
      <HeaderCart onClick={onToggleCart} showingCart={showingCart} />
    </header>
  );
}
export default Header;
