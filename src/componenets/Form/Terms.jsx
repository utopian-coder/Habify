import React from "react";
import classes from "./Terms.module.css";
import CheckBox from "./UI/CheckBox";

function Terms() {
  return (
    <div className={classes["terms-container"]}>
      <div className={classes.checkbox}>
        <input
          type='checkbox'
          name='terms'
          id='terms'
          className={classes.control}
        />
        <label htmlFor='terms'>I agree to the Terms and Conditions.</label>
      </div>
      <div className={classes.checkbox}>
        <input
          type='checkbox'
          name='newsletter'
          id='newsletter'
          className={classes.control}
        />
        <label htmlFor='newsletter'>Subscribe to newsletter.</label>
      </div>
    </div>
  );
}

export default Terms;
