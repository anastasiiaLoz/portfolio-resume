import React from "react";
import "./button.css"

const Button = ({ onClick, children }) => {
    return (
      <button className="btn btn-primary" onClick={onClick}>
        {children}
      </button>
    );
}

export default Button;

