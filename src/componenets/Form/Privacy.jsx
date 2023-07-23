import React from "react";
import CheckBox from "./UI/CheckBox";
import classes from "./Privacy.module.css";
import Facebook from "../../assets/facebook.png";
import Twitter from "../../assets/twitter.png";
import Google from "../../assets/google.png";
import Icon from "./UI/Icon";

function Privacy() {
  return (
    <article className={classes.privacy}>
      <div className={classes["control-container"]}>
        <p>Who can see my Profile?</p>
        <div className={classes.controls}>
          <CheckBox val='Everyone' />
          <CheckBox val='Only Friends' />
          <CheckBox val='Invite Only' />
        </div>
      </div>
      <div className={classes["control-container"]}>
        <p>Who can see my Profile?</p>
        <div className={classes.controls}>
          <CheckBox val='Facebook' icon={<Icon source={Facebook} />} />
          <CheckBox val='Twitter' icon={<Icon source={Twitter} />} />
          <CheckBox val='Google+' icon={<Icon source={Google} />} />
        </div>
      </div>
    </article>
  );
}

export default Privacy;
