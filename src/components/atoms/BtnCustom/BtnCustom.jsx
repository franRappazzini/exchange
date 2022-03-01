import "./BtnCustom.css";

import React from "react";

function BtnCustom({ text, onClick, style }) {
  return (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  );
}

export default BtnCustom;
