import React from "react";
import classes from "./BasicInfo.module.css";

function BasicInfo() {
  return (
    <article className={classes["basic-info"]}>
      <div className={classes.name}>
        <div className={classes["form-control-container"]}>
          <label htmlFor='firstName'>First Name</label>
          <input
            id='firstName'
            type='text'
            className={classes["form-control"]}
          />
        </div>

        <div className={classes["form-control-container"]}>
          <label htmlFor='lastName'>Last Name</label>
          <input
            id='lastName'
            type='text'
            className={classes["form-control"]}
          />
        </div>
      </div>

      <div className={classes["form-control-container"]}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' className={classes["form-control"]} />
      </div>

      <div className={classes["form-control-container"]}>
        <label htmlFor='email'>Email Address</label>
        <input id='email' type='email' className={classes["form-control"]} />
      </div>

      <div className={classes["form-control-container"]}>
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          type='password'
          className={classes["form-control"]}
        />
      </div>
    </article>
  );
}

export default BasicInfo;
