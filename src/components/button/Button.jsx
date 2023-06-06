import React from "react";
import s from "./Button.module.css"


const Button = ({ onClick, children }) => {
    return (
      <button className={s.btn_toggle} onClick={onClick}>
        {children}
      </button>
    );
}

export default Button;

