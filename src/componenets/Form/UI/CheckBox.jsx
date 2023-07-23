import React from "react";
import classes from "./CheckBox.module.css";

function CheckBox({ val, icon, styles }) {
  return (
    <div className={classes.checkbox} style={styles}>
      <input
        type='checkbox'
        name={val}
        id={val}
        className={classes["checkbox-control"]}
      />
      <div className={classes.label}>
        {icon}
        <label htmlFor={val}>{val}</label>
      </div>
    </div>
  );
}

export default CheckBox;
