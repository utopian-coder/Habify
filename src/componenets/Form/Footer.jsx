import React from "react";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineDribbble,
  AiOutlineGooglePlus,
} from "react-icons/ai";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.footer}>
      <a href='#'>Terms</a>
      <a href='#'>Privacy</a>
      <a href='#'>Send Feedback</a>
      <AiFillFacebook className={classes.icon} />
      <AiOutlineTwitter className={classes.icon} />
      <AiOutlineDribbble className={classes.icon} />
      <AiOutlineGooglePlus className={classes.icon} />
    </footer>
  );
}

export default Footer;
