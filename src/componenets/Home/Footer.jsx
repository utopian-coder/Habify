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
      <div className={classes["footer-content"]}>
        <div className={classes.container}>
          <a href='#'>Support</a>
          <a href='#'>About</a>
          <a href='#'>Contact Us</a>
          <a href='#'>The Team</a>
        </div>
        <div className={classes["container-two"]}>
          <div className={classes.terms}>
            <p>&copy;2023 Emotional First Aid Academy</p>
            <a href='#'>Terms</a>
            <a href='#'>Privacy</a>
            <a href='#'>Send Feedback</a>
          </div>
          <div className={classes.icons}>
            <AiFillFacebook className={classes.icon} />
            <AiOutlineTwitter className={classes.icon} />
            <AiOutlineDribbble className={classes.icon} />
            <AiOutlineGooglePlus className={classes.icon} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
