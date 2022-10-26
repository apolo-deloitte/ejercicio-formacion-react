import React from "react";
import classes from "./Input.module.scss";

const Input = ({ style, placeholder, value, onChange }) => {
  return (
    <input
      className={`${style || classes.input}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
