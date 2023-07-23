import React from "react";
import classes from "./Socials.module.css";
import Input from "./UI/Input";
import Icon from "./UI/Icon";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import google from "../../assets/google.png";
import youtube from "../../assets/youtube.png";

function Socials() {
  return (
    <div className={classes.socials}>
      <Input
        type='text'
        heading='Facebook URL'
        id='facebook'
        icon={<Icon source={facebook} />}
      />
      <Input
        type='text'
        heading='Twitter Username'
        id='twitter'
        icon={<Icon source={twitter} />}
      />
      <Input
        type='text'
        heading='Google+ Account ID'
        id='google+'
        icon={<Icon source={google} />}
      />
      <Input
        type='text'
        heading='Youtube Channel URL'
        id='youtube'
        icon={<Icon source={youtube} />}
      />
    </div>
  );
}

export default Socials;
