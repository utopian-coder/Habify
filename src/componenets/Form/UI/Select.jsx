import React from "react";
import classes from "./Select.module.css";

function Select({ val, options }) {
  return (
    <div className={classes.select}>
      <label htmlFor={val}>{val}</label>
      <select name={val} id={val} className={classes.control}>
        {options.length > 0 &&
          options.map((curr) => <option value={curr}>{curr}</option>)}
      </select>
    </div>
  );
}

export default Select;
