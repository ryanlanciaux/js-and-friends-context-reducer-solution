import React, { useRef } from "react";
import "./Search.css";
import Button from "./Button";

function handleEnter(e, callback) {
  if (e.key === "Enter" || e.keyCode === 13) {
    callback(e.target.value);
    e.target.value = "";
  }

  return;
}

function Search({ onEnter }) {
  const item = useRef();

  const clearInput = () => {
    item.current.value = "";
  };

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <label htmlFor="product-search">Find product</label>
      <input
        ref={item}
        name="product-search"
        type="text"
        onKeyUp={e => {
          handleEnter(e, onEnter);
        }}
      />
      <Button
        onClick={() => {
          onEnter(item.current.value);
          clearInput();
        }}
      >
        Go
      </Button>
    </div>
  );
}

export default Search;
