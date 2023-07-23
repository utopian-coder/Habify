import React from "react";
import classes from "./Input.module.css";

function Input({ heading, icon, type, id }) {
  return (
    <div className={classes["control-container"]}>
      <label htmlFor={id}>
        {icon}
        {heading}
      </label>
      <input type={type} id={id} className={classes.control} />
    </div>
  );
}

export default Input;
